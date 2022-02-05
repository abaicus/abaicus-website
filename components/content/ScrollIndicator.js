import { useEffect, useState } from "react";

export default function ScrollIndicator() {
    const [readPct, setReadPct] = useState(0);

    const getScrollPercentage = () => {

        let h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

        const percentage = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

        if (percentage < 5) {
            return 0;
        }

        if (percentage > 95) {
            return 100;
        }

        return percentage;
    }

    useEffect(() => {

        setReadPct(getScrollPercentage());

        document.addEventListener('scroll', () => {
            setReadPct(getScrollPercentage());
        })
    }, []);

    return <div className='fixed top-0 left-0 h-1.5 bg-sky-500 dark:bg-sky-300 z-10 transition-all' style={{ width: `${readPct}%` }} />
}