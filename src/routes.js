import React from "react";
import { Switch, Route } from "react-router-dom";

import ProfileContainer from "./containers/profile_container.js";
import NoRoute from "./components/404";
import Layout from "./hoc/layout.js";

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={ProfileContainer} />
      <Route component={NoRoute} />
    </Switch>
  </Layout>
);

export default Routes;
