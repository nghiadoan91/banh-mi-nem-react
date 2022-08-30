/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import OrderForm from "../src/views/OrderForm";
import Main from "../src/layouts/Main";
import ReactGA from "react-ga";

const OrderFormPage = (): JSX.Element => {
  useEffect(() => {
    ReactGA.initialize("UA-186200165-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="container">
      <Main>
        <OrderForm />
      </Main>
    </div>
  );
};

export default OrderFormPage;
