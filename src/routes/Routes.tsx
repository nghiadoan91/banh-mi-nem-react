/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "../common";
import { Main as MainLayout } from "../layouts";

import {
  Home as HomeView,
  NotFound as NotFoundView,
  OrderForm as OrderFromView
} from "../views";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />

      <RouteWithLayout
        component={OrderFromView}
        exact
        layout={MainLayout}
        path="/order-form"
        title="Đặt Hàng với U Shop BKK"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
