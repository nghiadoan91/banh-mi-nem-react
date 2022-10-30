/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React, { useEffect } from "react";
import Contact from "../src/views/Contact";
import Main from "../src/layouts/Main";

const ContactPage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <Contact />
      </Main>
    </div>
  );
};

export default ContactPage;
