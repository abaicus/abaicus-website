import { classNames, generateArray } from "../common/utils";
import Container from "../components/layout/container";
import PGCards from "../components/playground/PGCards";
import PGCycleValues from "../components/playground/PGCycleValues";
import PGHeader from "../components/playground/PGHeader";
import ScrollIndicator from "../components/content/ScrollIndicator";

export default function Playground() {
    return (
        <div className="dark:bg-zinc-900 dark:text-white">
            <ScrollIndicator />
            <Container className="fixed pointer-events-none left-1/2 -translate-x-1/2 px-2 top-0 bottom-0 w-full grid grid-cols-2 lg:grid-cols-4">
                {generateArray(4).map(i => {
                    return <div data-col={i} key={i} className={
                        classNames(
                            "border-gray-200 dark:border-neutral-800 border-dashed border-l",
                            i > 1 ? 'hidden md:block' : '',
                            i === 3 ? "border-r" : ''

                        )
                    } >
                        <span ></span>
                    </div>
                })}
            </Container>


            <PGHeader title={`This is the Frontend Playground`} description={'This is where I\'ll drop the cool stuff that I tinker with using Tailwind CSS and other frontend tools.'} />

            <PGCards />

            <hr className="my-6" />

            <PGCycleValues />


        </div >
    );
}