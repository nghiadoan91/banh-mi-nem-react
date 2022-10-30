/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import Home from "../src/views/Home";
import Main from "../src/layouts/Main";

const IndexPage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <Home />
      </Main>
    </div>
  );
};

export default IndexPage;
