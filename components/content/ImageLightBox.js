import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/solid'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

export default function ImageLightbox({
  path,
  open,
  setOpen,
  setNext,
  setPrev,
}) {
  const close = () => {
    setOpen("");
  };

  const trapKeys = (e) => {
    e = e || window.event;

    if (e.keyCode == "37") {
      setPrev();
    } else if (e.keyCode == "39") {
      setNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", trapKeys, true);

    return () => {
      window.removeEventListener("keydown", trapKeys);
    };
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={close}
      >
        <div className="flex items-center justify-center min-h-screen py-4 px-4  text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-95 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className='absolute bottom-0 bg-black bg-opacity-80 w-full py-2'>
              <div className="max-w-[95vw] flex m-auto">
                {(setNext && setPrev) && <span className="inline-flex rounded-md">
                  <button
                    onClick={setPrev}
                    type="button"
                    className="relative inline-flex items-center px-5 py-2 rounded-l-md bg-sky-700 text-gray-300"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={setNext}
                    type="button"
                    className="-ml-px relative inline-flex items-center px-5 py-2 rounded-r-md bg-sky-700 text-gray-300"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </span>}

                <button onClick={close} type="button" className="p-2 rounded-md bg-sky-700 text-gray-300 ml-auto">
                  <span className="sr-only">Close</span>
                  <XIcon className='h-5 w-5' aria-hidden="true" />
                </button>
              </div>
            </div>
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative align-middle grid items-center">
              <div className='transform transition-all'>
                <img
                  src={path}
                  className="rounded-lg overflow-hidden shadow-xl max-h-[80vh] max-w-[95vw]"
                />
              </div>
            </div>
          </Transition.Child>
        </div >
      </Dialog >
    </Transition.Root >
  );
}