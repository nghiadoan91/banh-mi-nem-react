/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import { RouteWithLayout } from "../common";
import { Main as MainLayout } from "../layouts";

import {
  Home as HomeView,
  NotFound as NotFoundView
} from "../views";

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Navigate to="/not-found" />
    </BrowserRouter>
  );
};

export default Routes;
