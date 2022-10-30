/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import GuideView from "../src/views/GuideView";
import Main from "../src/layouts/Main";

const HomePage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <GuideView />
      </Main>
    </div>
  );
};

export default HomePage;
