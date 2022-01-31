import { CameraIcon } from "@heroicons/react/outline";
import ContentPage from "../components/content/ContentPage";
import Image from "next/image";
import ImageLightbox from "../components/content/ImageLightBox";
import { classNames } from "../common/utils";
import { getPlaiceholder } from "plaiceholder";
import { useState } from "react";

export default function ({ images }) {
  const [current, setCurrent] = useState(null);


  const setPrev = () => {
    setCurrent((now) => {
      if (now === 0) {
        return images.length - 1;
      }

      return now - 1;
    });
  };

  const setNext = () => {
    setCurrent((now) => {
      if (now === images.length - 1) {
        return 0;
      }

      return now + 1;
    });
  };

  return (
    <ContentPage title="Photography" byline="Stills" extraBodyClass="max-w-5xl">
      <ImageLightbox
        setNext={setNext}
        setPrev={setPrev}
        setOpen={setCurrent}
        onClose={() => setCurrent(null)}
        open={current !== null}
        path={images[current] && images[current].img.src}
      />

      <div
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8 my-20"
      >
        {images.map((one, idx) => {
          const { base64, img } = one;

          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setCurrent(idx)}
              className="flex shadow-sm hover:scale-105 hover:shadow-lg transition-all ease-out duration-300 rounded-lg overflow-hidden relative inset-0 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-sky-500 "
            >
              <Image
                src={img.src}
                width="610"
                height="400"
                placeholder="blur"
                blurDataURL={base64}
                className="object-cover block pointer-events-none group-hover:opacity-75  bg-gray-100 dark:bg-gray-800"
              />
            </button>
          );
        })}
        <a
          href="https://instagram.com/abaicus92"
          target="_blank"
          className={
            classNames(
              "flex justify-center no-underline shadow-sm hover:scale-105 hover:shadow-lg hover:bg-gradient-to-tr hover:from-pink-800 hover:to-orange-500  transition-all ease-out duration-300 rounded-lg overflow-hidden focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-sky-500 hover:text-white text-orange-500 bg-gray-100 dark:bg-gray-800",
              images.length % 2 === 0 ? 'sm:col-span-2' : ''
            )
          }
        >
          <div className="flex flex-col py-16 w-full h-full items-center justify-center">
            <CameraIcon className="h-7 w-7" />
            <span>Instagram</span>
          </div>
        </a>
      </div>
    </ContentPage>
  );
}

export const getStaticProps = async () => {
  const files = [];
  const exclude = [10];

  Array.from(Array(23)).forEach((i, idx) => {
    if (exclude.includes(idx)) {
      return;
    }
    files.push(`/images/portfolio/${idx}.jpg`);
  });



  const images = await Promise.all(files.map(async (file) => {
    const { base64, img } = await getPlaiceholder(file);
    return { base64, img };
  }));

  return { props: { images } }
};