import Image from "next/image";

export default function ({src, caption, alt}) {
    return (
        <figure style={{width: '100%', height: "auto"}}>
            <Image src={src} layout='responsive' className="w-full rounded-lg" alt={alt || 'Content Image'}/>
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    )
}
