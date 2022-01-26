import { CameraIcon } from "@heroicons/react/outline";
import ContentPage from "../components/content/ContentPage";
import Image from "next/image";
import ImageLightbox from "../components/content/ImageLightBox";
import { classNames } from "../common/utils";
import { useState } from "react";

export default function () {
  const [current, setCurrent] = useState("");
  const files = [];

  const exclude = [10];

  Array.from(Array(23)).forEach((i, idx) => {
    if (exclude.includes(idx)) {
      return;
    }
    files.push(`/images/portfolio/${idx}.jpg`);
  });

  const setPrev = () => {
    setCurrent((now) => {
      const toSet = files.indexOf(now);
      if (toSet === 0) {
        return files[files.length - 1];
      }

      return files[toSet - 1];
    });
  };

  const setNext = () => {
    setCurrent((now) => {
      const toSet = files.indexOf(now);

      if (toSet === files.length - 1) {
        return files[0];
      }

      return files[toSet + 1];
    });
  };

  return (
    <ContentPage title="Photography" byline="Stills" extraBodyClass="max-w-5xl">
      <ImageLightbox
        setNext={setNext}
        setPrev={setPrev}
        setOpen={setCurrent}
        open={current !== ""}
        path={current}
      />

      <div
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8 my-20"
      >
        {files.map((file) => {
          return (
            <button
              key={file}
              type="button"
              onClick={() => setCurrent(file)}
              className="flex shadow-sm hover:scale-105 hover:shadow-lg transition-all ease-out duration-300 rounded-lg overflow-hidden relative inset-0 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-sky-500 "
            >
              <Image
                src={file}
                width="600"
                height="400"
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
              files.length % 2 === 0 ? 'sm:col-span-2' : ''
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
