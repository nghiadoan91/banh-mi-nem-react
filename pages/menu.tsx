/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import GuideView from "../src/views/GuideView";
import Main from "../src/layouts/Main";
import OrderView from "../src/views/Order/OrderView";

const MenuPage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <GuideView />
        <OrderView />
      </Main>
    </div>
  );
};

export default MenuPage;
