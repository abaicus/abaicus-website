import { useState } from "react";
import {
  PlusIcon,
  LockClosedIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import { classNames } from "../../common/utils";

import { LocationNamesEn } from "./constants";

export const ClueForm = ({ onAdd, location, value, empty, lang }) => {
  const [val, setVal] = useState(value);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const addClue = (e) => {
    e.preventDefault();
    if (!empty) {
      setVal("");
      onAdd(location, "");
      return;
    }

    onAdd(location, parseInt(val));
  };

  const label = lang === "en" ? LocationNamesEn[location] : location;

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 items-center"
      onSubmit={addClue}
    >
      <label htmlFor={location}>
        <h5 className="text-center mb-3 md:mb-0 md:text-left font-semibold text-gray-600 dark:text-white">
          {label}
        </h5>
      </label>

      <div className="flex items-center text-center md:text-right">
        <div className="md:ml-auto md:w-40 flex-grow md:flex-grow-0 relative">
          <HashtagIcon className="pointer-events-none absolute w-4 h-4 left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            className={classNames(
              "pl-7 focus:ring-sky-300 focus:border-sky-500 w-full h-10 text-gray-800 border bg-white-50 rounded-l-md text-base",
              empty ? "bg-white-50" : "bg-gray-100"
            )}
            disabled={!empty}
            id={location}
            name={location}
            type="number"
            value={val}
            onChange={handleChange}
            max={1050}
            min={1}
            placeholder={"Clue no."}
          />
        </div>
        <div>
          <button
            type="submit"
            className={classNames(
              "flex items-center  justify-center h-10 w-10 text-white rounded-r-md",
              empty ? "bg-sky-500" : "bg-red-400"
            )}
          >
            {empty ? (
              <PlusIcon className="w-4 h-4" />
            ) : (
              <LockClosedIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
