/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import AOS from "aos";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "assets/css/index.scss";
import ReactGA from "react-ga";

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>UShopBKK</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}
