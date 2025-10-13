import { ThemeProvider } from "@/components/theme/ThemeProvider";
import i18n from "@/i18n";
import "aos/dist/aos.css";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [langReady, setLangReady] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Use the same key as SiteHeader: selectedLanguageCode
      const savedLangCode =
        localStorage.getItem("selectedLanguageCode") || "en";
      if (i18n.language !== savedLangCode) i18n.changeLanguage(savedLangCode);
      // set dir attribute
      if (savedLangCode !== "en") {
        document.documentElement.setAttribute("dir", "rtl");
        document.body.classList.add("rtl");
      } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.body.classList.remove("rtl");
      }
      setLangReady(true);
    }
  }, []);
  if (!langReady) return null;
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
