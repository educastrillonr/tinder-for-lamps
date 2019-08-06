import React, { Component } from "react";
import Cards from "../Cards";

class ResultsPage extends Component {
  state = {};
  render() {
    return (
      <section className="wrapper">
        <Cards cards={this.props.lampArray} page={1} />
      </section>
    );
  }
}

export default ResultsPage;
