import { NextUIProvider } from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "@fortawesome/fontawesome-svg-core/styles.css";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
