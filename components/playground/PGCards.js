import Container from "../layout/container"
import {
    FilmIcon,
    PlayIcon,
    CameraIcon,
    CakeIcon,
    AdjustmentsIcon,
    BellIcon,
    DesktopComputerIcon,
    LockOpenIcon
} from "@heroicons/react/outline";
import { classNames, generateArray } from "../../common/utils"

const cards = [
    {
        title: 'Indigo Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        icon: AdjustmentsIcon,
    },
    {
        title: 'Orange Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-orange-100 text-orange-600',
        titleClasses: 'border-orange-100 group-hover:border-orange-500 group-hover:text-orange-800 dark:group-hover:text-orange-200',
        icon: FilmIcon,
    },
    {
        title: 'Lime Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-lime-100 text-lime-600',
        titleClasses: 'border-lime-100 group-hover:border-lime-500 group-hover:text-lime-800 dark:group-hover:text-lime-200',
        icon: CakeIcon,
    },
    {
        title: 'Sky Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-sky-100 text-sky-600',
        titleClasses: 'border-sky-100 group-hover:border-sky-500 group-hover:text-sky-800 dark:group-hover:text-sky-200',
        icon: CameraIcon,
    },
    {
        title: 'Emerald Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-emerald-100 text-emerald-600',
        titleClasses: 'border-emerald-100 group-hover:border-emerald-500 group-hover:text-emerald-800 dark:group-hover:text-emerald-200',
        icon: PlayIcon,
    },
    {
        title: 'Rose Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-rose-100 text-rose-600',
        titleClasses: 'border-rose-100 group-hover:border-rose-500 group-hover:text-rose-800 dark:group-hover:text-rose-200',
        icon: BellIcon,
    },
    {
        title: 'Fuchsia Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-fuchsia-100 text-fuchsia-600',
        titleClasses: 'border-fuchsia-100 group-hover:border-fuchsia-500 group-hover:text-fuchsia-800 dark:group-hover:text-fuchsia-200',
        icon: DesktopComputerIcon,
    },
    {
        title: 'Green Card',
        description: 'The color in the title of this card represents the Tailwind color used for the icon and hover effects.',
        iconClasses: 'bg-green-100 text-green-600',
        titleClasses: 'border-green-100 group-hover:border-green-500 group-hover:text-green-800 dark:group-hover:text-green-200',
        icon: LockOpenIcon,
    },
];

export default function PGCards() {
    return (
        <Container className="py-36 grid lg:py-16 relative">
            <div className="px-3">
                <h2 className="text-5xl mb-2 font-bold">Cards</h2>
                <p>Here are some card styles. Nothing special.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-y-10 lg:grid-cols-4 pt-20 relative">
                {cards.map((card) => {
                    return (
                        <div key={card.title} className="w-full p-3 group">
                            <div className={classNames(card.iconClasses ? card.iconClasses : 'bg-indigo-100 text-indigo-600',
                                'mb-5 rounded-full w-auto inline-flex p-2 transition-all ease-out group-hover:scale-105 md:group-hover:-ml-8')}>
                                <card.icon className="h-6 w-6" />
                            </div>
                            <h3 className={classNames(card.titleClasses ? card.titleClasses : ' group-hover:border-indigo-500 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 border-indigo-100', 'font-semibold -ml-3 pl-3 border-l py-1 mb-3 transition-all')}>
                                {card.title}
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-300 leading-normal">
                                {card.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Container >
    );
}