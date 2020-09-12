import React from "react";
import Home from "../pages/Home";
import { auth } from "../services";
import Register from "../pages/Register"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registro" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
