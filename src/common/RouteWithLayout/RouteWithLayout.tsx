import React from "react";
import { Route } from "react-router-dom";
import { TitleComponent } from "../../common";

interface Props {
  layout: any;
  component: any;
  // All other props
  [x: string]: any;
}
const RouteWithLayout = ({
  title,
  layout: Layout,
  component: Component,
  ...rest
}: Props): JSX.Element => {
  var defaultTitle = "U Shop BKK";
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <TitleComponent title={title} />
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
