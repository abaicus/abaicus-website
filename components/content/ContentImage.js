import Image from "next/image";

export default function ({ src, caption, alt, blurPH = false, phSRC = '', w, h }) {
  return (
    <figure style={{ width: "100%", height: "auto" }}>
      <Image
        src={src}
        width={w || 660}
        height={h || 440}
        className="w-full rounded-lg object-cover"
        alt={alt || "Content Image"}
        placeholder={blurPH ? 'blur' : 'empty'}
        blurDataURL={blurPH && phSRC ? phSRC : ''}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
