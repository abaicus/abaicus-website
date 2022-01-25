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
      className="inline-flex items-center px-1 pt-1 text-sm font-medium rounded-full"
    >
      {enabled ? (
        <SunIcon className={iconClasses} />
      ) : (
        <MoonIcon className={iconClasses} />
      )}
    </button>
  );
}
