import "../styles/global.css";
import DocumentHead from "../components/DocumentHead";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { useEffect, useState } from "react";
import { classNames } from "../common/utils";
import DarkMode from "../components/DarkModeContext";
import TagManager from "react-gtm-module";

export default function MyApp({ Component, pageProps }) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NWKH3DR" });

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.theme = !isDarkMode ? "dark" : "light";
    setDarkMode(!isDarkMode);
  };
  return (
    <>
      <DocumentHead />
      <div
        className={classNames(
          "wrap flex flex-col h-full",
          isDarkMode ? "dark" : ""
        )}
      >
        <DarkMode.Provider
          value={{
            enabled: isDarkMode,
            toggle: toggleDarkMode,
          }}
        >
          <Header />
        </DarkMode.Provider>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
