import { useEffect, useState } from "react";

export default function useArrayCycle(arrayToCycle, interval = 2000, forward = true) {
    const [current, setCurrent] = useState(0);
    const [hold, setHold] = useState(false);

    const holdCycle = () => {
        setHold(true);
    };

    const continueCycle = () => {
        setHold(false);
    };

    const goForward = () => {
        setCurrent((old) => {
            if (old === arrayToCycle.length - 1) {
                return 0;
            }
            return old + 1;
        });
    }

    const goBack = () => {
        setCurrent((old) => {
            if (old === 0) {
                return arrayToCycle.length - 1;
            }
            return old - 1;
        });
    }

    useEffect(() => {
        if (hold) {
            return;
        }

        const timer = setTimeout(forward ? goForward : goBack, interval);

        return () => clearTimeout(timer);

    }, [current, hold]);

    return { value: arrayToCycle[current], index: current, isOnHold: hold, holdCycle, continueCycle, goBack, goForward };
}