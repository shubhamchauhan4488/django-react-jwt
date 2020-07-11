import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { SignIn } from "../Account/SignIn";
import { Account } from "../Account/Account";
import { SignUp } from "../Account/SignUp";
import { Dashboard } from "../Dashboard/Dashboard";
import { BusinessesInfo } from "../BusinessInformation/BusinessInfo"
import history from './../../globals/history';

export const Layout = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route
          path="/"
          component={() => (
            <Account>
              <SignIn />
            </Account>
          )}
          exact
        />
        <Route
          path="/signUp"
          component={() => (
            <Account>
              <SignUp />
            </Account>
          )}
          exact
        />
        <Route path="/dashboard" component={() => <Dashboard />} exact />
        <Route path="/business/:id" component={() => <BusinessesInfo />} exact />
      </Switch>
    </div>
  </Router>
);
