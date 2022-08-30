import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { sessionStorage } from "../utils/utils";

import { light, dark } from "./palette";

const mode = sessionStorage.getItem("themeMode") || "light";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: mode === "light" ? light : dark,
    layout: {
      contentWidth: 1236
    },
    typography: {
      // fontFamily: 'Lato',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: "white"
        }
      }
    }
  })
);

export default theme;
