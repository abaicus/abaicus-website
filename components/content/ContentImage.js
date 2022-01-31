import Image from "next/image";
import { classNames as cnUtil } from "../../common/utils";

export default function ({ src, caption, alt, blurPH = false, phSRC = '', w, h, classNames }) {
  return (
    <figure
      style={{ width: "100%", height: "auto" }}
      className={cnUtil("w-full rounded-lg overflow-hidden flex shadow-md", classNames)}
    >
      <Image
        src={src}
        width={w || 660}
        height={h || 440}
        alt={alt || "Content Image"}
        placeholder={blurPH ? 'blur' : 'empty'}
        blurDataURL={blurPH && phSRC ? phSRC : ''}
        className="block m-0 object-cover"
      />
    </figure>
  );
}
