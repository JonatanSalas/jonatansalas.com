import { createTheme } from "@nextui-org/react";

let lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      gradient: "linear-gradient(45deg, $blue600 -20%, #00D2B8 60%)",
    },
  },
});

export default lightTheme;
