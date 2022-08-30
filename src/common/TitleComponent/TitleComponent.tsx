import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle = "U Shop BKK";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
