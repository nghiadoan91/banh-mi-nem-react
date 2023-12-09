import { createTheme, responsiveFontSizes } from "@mui/material";
import { sessionStorage } from "../utils/utils";

import { light, dark } from "./palette";

const mode = sessionStorage.getItem("themeMode") || "light";

const theme = responsiveFontSizes(
  createTheme({
    palette: mode === "light" ? light : dark,
    // typography: {
    //   fontFamily: 'Lato',
    // },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    // overrides: {
    //   MuiButton: {
    //     containedSecondary: {
    //       color: "white"
    //     }
    //   }
    // }
  })
);

export default theme;
