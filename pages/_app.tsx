import "animate.css";
import "../themes/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { NextUIProvider } from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="dark"
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
