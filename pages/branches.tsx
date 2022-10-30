/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import Catalog from "../src/views/Catalog";
import Main from "../src/layouts/Main";

const HomePage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <Catalog />
      </Main>
    </div>
  );
};

export default HomePage;
