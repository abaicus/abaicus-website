export default function ImageDecorator({ overlay = false }) {
    if (!overlay) {
        return (
            <>
                <div className="absolute pointer-events-none w-[30%] h-[55%] -right-5 -bottom-5 mix-blend-multiply bg-sky-400 rounded-lg shadow-lg shadow-sky-200 transition-all 
    group-hover:bg-orange-400 group-hover:shadow-orange-200 group-hover:-right-10 group-hover:-bottom-10 group-hover:scale-110
    dark:mix-blend-hard-light dark:shadow-none dark:opacity-75"/>

                <div className="absolute pointer-events-none w-[20%] h-[37%] -left-5 -top-5 mix-blend-multiply bg-red-500 rounded-lg shadow-lg shadow-red-200 transition-all
    group-hover:bg-teal-400 group-hover:shadow-teal-200 group-hover:-left-10 group-hover:-top-10 group-hover:scale-110 
    dark:mix-blend-hard-light dark:shadow-none dark:opacity-75"/>
            </>
        )
    }

    return (
        <div className="absolute pointer-events-none w-full h-full transition-all rounded-md bg-red-100 z-10 bg-gradient-to-br from-transparent to-gray-900 opacity-30 mix-blend-multiply group-hover:opacity-0" />
    )
} 