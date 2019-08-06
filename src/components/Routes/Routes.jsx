import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import TinderPage from "../../containers/TinderPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="TinderPage" />
        <TinderPage path="TinderPage" />

        {/* <ResultsPage path="ResultsPage" lampArray={this.state.acceptedCards} /> */}
      </Router>
    );
  }
}

export default Routes;
