import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import TinderPage from "../../containers/TinderPage";
import ResultsPage from "../../containers/ResultsPage";
import data from "../../assets/data/data";
import { navigate } from "@reach/router/lib/history";

class Routes extends Component {
  state = {
    filteredData: data
  };

  rejectedCards = [];
  acceptedCards = [];

  checkArray = () => {
    if (this.state.filteredData.length === 0) {
      this.updateArray(this.acceptedCards);
      navigate("ResultsPage");
    }
  };

  updateArray = newArray => {
    this.setState({
      filteredData: newArray
    });
  };

  rejectCard = () => {
    let copy = this.state.filteredData;
    this.rejectedCards.push(copy.pop());
    this.updateArray(copy);
    this.checkArray();
  };

  acceptCard = () => {
    let copy = this.state.filteredData;
    this.acceptedCards.push(copy.pop());
    this.updateArray(copy);
    this.checkArray();
  };
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="TinderPage" />
        <TinderPage
          path="TinderPage"
          filteredData={this.state.filteredData}
          rejectCard={this.rejectCard}
          acceptCard={this.acceptCard}
        />
        <ResultsPage path="ResultsPage" lampArray={this.state.filteredData} />
      </Router>
    );
  }
}

export default Routes;
