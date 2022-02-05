import Container from "../layout/container";

export default function PGHeader({ title, description }) {
    return <div className="relative">

        <div className="-z-1 absolute w-full -skew-y-3 bg-gradient-to-t from-indigo-500 to-sky-500 h-[500px] -translate-y-[20%]  shadow-xl">
            <div className="bg-indigo-600 w-full h-5 absolute -bottom-0 z-20" />
            <div className="absolute rounded-md z-10 bg-indigo-500 opacity-50 w-[200px] h-[90px] right-5 -bottom-[110px] mix-blend-hard-light" />
            <div className="absolute rounded-md bg-sky-500 opacity-50 w-[200px] h-[90px] right-10 -bottom-[150px] mix-blend-overlay" />
        </div>

        <Container className='relative md:py-24 py-16 grid lg:grid-cols-2 gap-10'>
            <div>
                <h1 className="md:text-6xl text-5xl text-white bg- font-extrabold text-left mb-10 tracking-tight">{title}</h1>
                <p className="text-neutral-200 text-lg md:text-xl">{description}</p>
            </div>
        </Container>
    </div>;
}