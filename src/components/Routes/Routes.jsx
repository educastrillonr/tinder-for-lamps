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
          loading={this.props.loading}
          handleFileInput={this.props.handleFileInput}
        />
        <TinderPage
          path="TinderPage"
          updateLoading={this.props.updateLoading}
          images={this.props.images}
        />
      </Router>
    );
  }
}

export default Routes;
