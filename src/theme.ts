import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBlue: Palette["primary"];
  }
  interface PaletteOptions {
    customBlue?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4F5F7",
    },
    customBlue: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export default theme;
