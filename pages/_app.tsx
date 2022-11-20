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
import { useRouter } from 'next/router';
import AOS from "aos";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "assets/css/index.scss";
import {I18nextProvider } from "react-i18next";
import i18n from'../localization/translationUtils';
import Script from "next/dist/client/script";

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out"
    });
  }, []);
  const router = useRouter()
  i18n.changeLanguage(router.locale?? "en")
  console.log(i18n?.language)
  return (
    <React.Fragment>
      <I18nextProvider i18n={i18n}>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-R77RD6RWK5`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R77RD6RWK5', {
              page_path: window.location.pathname,
              });

              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '603849159757376');
              fbq('track', 'PageView');
          `}
      </Script>
      <noscript><img height="1" width="1" style={{display:"none"}}
src="https://www.facebook.com/tr?id=603849159757376&ev=PageView&noscript=1"
/></noscript>
<div id="fb-root"></div>

    <div id="fb-customer-chat" className="fb-customerchat"></div>

    <Script strategy="lazyOnload">
      {` var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "banhminem");
      chatbox.setAttribute("attribution", "biz_inbox");`}
     
    </Script>


    <Script strategy="lazyOnload">
      {` window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v15.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
     
    </Script>
      <Head>
        <title>Banh Mi Nem</title>
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
      </I18nextProvider>
    </React.Fragment>
  );
}