import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import TinderPage from "../../containers/TinderPage";
import Upload from "../Upload";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="upload" />
        <Upload
          path="/upload"
          handleFileInput={this.props.handleFileInput}
          images={this.props.images}
          isFinished={this.props.isFinished}
        />
        <TinderPage path="TinderPage" images={this.props.images} />
        {/* <ResultsPage path="ResultsPage" lampArray={this.state.acceptedCards} /> */}
      </Router>
    );
  }
}

export default Routes;
