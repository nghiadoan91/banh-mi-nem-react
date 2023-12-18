/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import FoodSupportView from "../src/views/FoodSupportView";
import Main from "../src/layouts/Main";

const MenuPage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <FoodSupportView />
      </Main>
    </div>
  );
};

export default MenuPage;
