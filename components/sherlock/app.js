import { useEffect, useState } from "react";
import { clues } from "./clues";
import { ClueForm } from "./ClueForm";
import { LocalStorageKey, Locations } from "./constants";
import { RefreshIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../common/utils";

const App = () => {
  const local = JSON.parse(
    window.localStorage.getItem(LocalStorageKey) || "{}"
  );
  const initialLang = window.localStorage.getItem("lang") || "en";
  const [saved, setSaved] = useState({ ...Locations, ...local });
  const [err, setError] = useState(null);
  const [lang, setLang] = useState(initialLang);

  const addClue = (location, value) => {
    if (!value) {
      const next = { ...saved, [location]: "" };
      setSaved(next);
      window.localStorage.setItem(LocalStorageKey, JSON.stringify(next));
      return false;
    }

    const nextVal = parseInt(value);

    if (nextVal < 0 || nextVal > 1050) {
      setError("Invalid Clue Number");
      return false;
    }

    if (typeof nextVal !== "number") {
      setError("Not a Number");
      return false;
    }

    const next = { ...saved, [location]: nextVal };
    setSaved(next);
    window.localStorage.setItem(LocalStorageKey, JSON.stringify(next));
  };

  const reset = () => {
    window.localStorage.removeItem(LocalStorageKey);
    window.location.reload();
  };

  useEffect(() => {
    if (err === null) return;
    setTimeout(() => {
      setError(null);
    }, 10000);
  }, err);

  return (
    <div className="pt-7 relative">
      {err && (
        <div className="flex text-red-800 p-2 border border-red-800 my-3 rounded bg-red-200">
          <span>{err}</span>
          <button
            className="py-2 px-2 rounded ml-auto bg-red-500 text-white"
            onClick={() => {
              setError(null);
            }}
          >
            <XIcon className="h-5 w-5 ml-auto" />
          </button>
        </div>
      )}
      <ul className="bg-white dark:bg-neutral-800 shadow overflow-hidden sm:rounded-md list-none p-0 divide-y divide-gray-200 dark:divide-neutral-700">
        {Object.keys(Locations).map((l) => {
          return (
            <li key={l} className="m-0 py-7 px-6">
              <ClueForm
                onAdd={addClue}
                location={l}
                value={saved[l]}
                empty={saved[l] === ""}
                lang={lang}
              />
              {saved[l] && (
                <p
                  className="prose whitespace-pre-wrap text-gray-900 dark:text-white mb-0"
                  dangerouslySetInnerHTML={{ __html: clues[saved[l]].text }}
                />
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex mt-10">
        <button
          className={classNames(
            "py-2 text-sm font-semibold uppercase px-5 rounded-l text-white transition-all shadow hover:shadow-md",
            lang === "en" ? "bg-blue-800 cursor-not-allowed" : "bg-blue-600"
          )}
          onClick={() => {
            setLang("en");
            window.localStorage.setItem("lang", "en");
          }}
        >
          EN 🇬🇧
        </button>
        <button
          className={classNames(
            "py-2 text-sm font-semibold uppercase px-5 rounded-r text-white transition-all shadow hover:shadow-md",
            lang === "ro" ? "bg-blue-800 cursor-not-allowed" : "bg-blue-600"
          )}
          onClick={() => {
            setLang("ro");
            window.localStorage.setItem("lang", "ro");
          }}
        >
          RO 🇷🇴
        </button>
        <button
          className="relative group py-2 text-sm font-semibold uppercase px-5 ml-auto rounded bg-red-400 text-white transition-all hover:pl-10 shadow hover:shadow-md"
          onClick={reset}
        >
          <RefreshIcon className="h-4 w-4 absolute top-1/2 transition-all -translate-y-1/2 -left-1 group-hover:left-3 z-10 opacity-0 group-hover:opacity-100 rotate-0 group-hover:-rotate-180" />
          Reset All
        </button>
      </div>
    </div>
  );
};
export default App;
