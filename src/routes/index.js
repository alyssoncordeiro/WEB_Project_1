import React from "react";
import Home from "../pages/Home";
import { auth } from "../services";
import Register from "../pages/Register"
import Search from "../pages/Search"

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function Routes() {
  return (
    <HashRouter>
      <Route
        exact
        path="/"
        component={() => (!auth() ? <Home /> : <Redirect to="/procurar" />)}
      />
      <Route exact path="/registro" component={Register} />
      <Route
        exact
        path="/procurar"
        component={() => (auth() ? <Search /> : <Redirect to="/" />)}
      />
    </HashRouter>
  );
}

export default Routes;
