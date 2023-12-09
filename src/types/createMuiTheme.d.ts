import { Theme, ThemeOptions } from "@mui/styles/createMuiTheme";

declare module "@mui/styles/createMuiTheme" {
  interface Theme {
    layout: {
      contentWidth: number | string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    layout?: {
      contentWidth: number | string;
    };
  };
}