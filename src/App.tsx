import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import AOS from "aos";

import theme from "./theme";
import Routes from "./routes/Routes";

import "react-lazy-load-image-component/src/effects/opacity.css";
import "leaflet/dist/leaflet.css";
import "./assets/css/index.scss";

import "aos/dist/aos.css";

const browserHistory = createBrowserHistory();
const App = (): JSX.Element => {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: "ease-in-out"
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
