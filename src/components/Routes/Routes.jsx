import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import TinderPage from "../../containers/TinderPage";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="TinderPage" />
        <TinderPage path="TinderPage" />
      </Router>
    );
  }
}

export default Routes;
