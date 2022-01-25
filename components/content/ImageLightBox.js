/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

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
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity" />
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
            <div className="relative inline-block bg-white rounded-lg overflow-hidden shadow-xl transform transition-all align-middle">
              <img src={path} className="max-h-[95vh] max-w-[95vw]" />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
