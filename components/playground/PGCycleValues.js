import { classNames } from "../../common/utils";
import useArrayCycle from "../../hooks/useArrayCycle";
import Container from "../layout/container";

import { PlayIcon, MusicNoteIcon, PaperAirplaneIcon, PaperClipIcon, PauseIcon, FastForwardIcon, RewindIcon } from "@heroicons/react/outline";
import { useState } from "react";

const data = [
    {
        description: 'This is the description text.',
        title: 'Play',
        color: 'text-purple-500',
        bgColor: 'bg-purple-700',
        icon: PlayIcon,
    },
    {
        description: 'This is the description text.',
        title: 'Music',
        color: 'text-fuchsia-500',
        bgColor: 'bg-fuchsia-700',
        icon: MusicNoteIcon,
    },
    {
        description: 'This is the description text.',
        title: 'Paperclip',
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-700',
        icon: PaperClipIcon,
    },
    {
        description: 'This is the description text.',
        title: 'Airplane',
        color: 'text-rose-500',
        bgColor: 'bg-rose-700',
        icon: PaperAirplaneIcon,
    }
];

export default function PGCycleValues() {
    const [arrayCycleInterval, setArrayCycleInterval] = useState(2500);
    const { value, index, holdCycle, continueCycle, isOnHold, goForward, goBack } = useArrayCycle(data, arrayCycleInterval);


    const buttons = [
        {
            callback: goBack,
            text: 'Back',
            icon: RewindIcon,
        },
        {
            callback: holdCycle,
            text: 'Pause',
            icon: PauseIcon,
        },
        {
            callback: continueCycle,
            text: 'Play',
            icon: PlayIcon,
        },
        {
            callback: goForward,
            text: 'Forward',
            icon: FastForwardIcon,
        }
    ]

    return (
        <Container className="py-36 grid lg:py-16 relative">
            <div className="px-3 flex flex-col xl:flex-row wrap">
                <div>
                    <h2 className="text-5xl mb-2 font-bold">Array Cycle</h2>
                    <p>This uses a custom hook called <span className="bg-purple-100 text-purple-900 rounded p-1 font-semibold">useArrayCycle</span>.</p>
                </div>

                <div className="space-x-2 xl:ml-auto flex flex-wrap">
                    <label className="flex items-center mt-2">
                        <span className="mr-2 font-semibold">Speed:</span>
                        <input type="number" min="500" className="border px-4 py-2 ml-auto rounded grow lg:grow-0" value={arrayCycleInterval} onChange={(e) => {
                            setArrayCycleInterval(e.target.value)
                        }} />
                    </label>

                </div>
            </div>

            <div className="pt-16 grid lg:grid-cols-2 relative">
                <div className="p-3">
                    <div className={classNames(
                        "rounded-md transition-all duration-500 p-5 grid text-white shadow-md relative",
                        value.bgColor
                    )}>
                        <div className="flex items-center">
                            <div className="w-20 h-20 mr-5 overflow-hidden relative bg-white rounded">
                                <div className="flex absolute">
                                    {data.map((d, idx) =>
                                        <d.icon
                                            style={{ transform: `translateX(calc(-100% * ${index}))` }}
                                            className={classNames("transition-all w-20 h-20 p-3", value.color)} />
                                    )}
                                </div>
                            </div>

                            <div>
                                <h1 className={classNames('text-3xl font-bold tracking-wider mb-2')}>{value.title}</h1>
                                <p>{value.description}</p>
                            </div>
                        </div>

                        <p className={classNames(
                            "text-center rounded py-2 px-5 border font-semibold flex absolute -top-2 -right-2",
                            isOnHold ? 'bg-rose-100 text-rose-500' : 'bg-green-100 text-green-700'
                        )}>
                            {isOnHold ? 'On hold' : 'Running'}
                        </p>

                    </div>

                    <div className="space-x-2 xl:ml-auto mt-10 flex justify-between flex-wrap">
                        {buttons.map((button) => {
                            return (
                                <button key={button.text} className={classNames("bg-purple-600 hover:bg-purple-800 transition-colors mt-2 rounded text-white flex items-center justify-center px-4 py-2 uppercase", button.classes ? button.classes : '')} onClick={button.callback}>
                                    <button.icon className="h-6 w-6 mr-1" />
                                    <span>{button.text}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Container >
    );
}