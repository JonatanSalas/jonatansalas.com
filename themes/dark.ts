import { createTheme } from "@nextui-org/react";

let darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      gradient: "linear-gradient(45deg, $blue600 -20%, #00D2B8 50%)",
    },
  },
});

export default darkTheme;

