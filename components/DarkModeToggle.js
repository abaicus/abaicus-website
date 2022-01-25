import { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import DarkMode from "./DarkModeContext";
import { classNames } from "../common/utils";

export default function () {
  const { toggle, enabled } = useContext(DarkMode);

  const iconClasses = classNames(
    "w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-white"
  );

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-100 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
    >
      <span className="sr-only">Toggle dark mode</span>
      {enabled ? (
        <SunIcon className={iconClasses} />
      ) : (
        <MoonIcon className={iconClasses} />
      )}
    </button>
  );
}
