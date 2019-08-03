import React, { Component } from "react";
import Cards from "./containers/Cards";
import data from "./assets/data/data";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  state = {
    filteredData: data
  };

  rejectedCards = [];
  acceptedCards = [];
  disable = false;

  checkForEmptyArray = () => {
    if (this.state.filteredData.length === 0) {
      this.disable = true;
    }
  };

  updateArray = cards => {
    this.setState({
      filteredData: cards
    });
    this.checkForEmptyArray();
  };
  rejectCard = () => {
    let copy = this.state.filteredData;
    this.rejectedCards.push(copy.pop());
    this.updateArray(copy);
  };

  acceptCard = () => {
    let copy = this.state.filteredData;
    this.acceptedCards.push(copy.pop());
    this.updateArray(copy);
  };

  render() {
    return (
      <div className="App">
        <section className="wrapper">
          <section className="cards-container">
            <Cards cards={this.state.filteredData} />
          </section>
          <section className="btn-container">
            <Button
              type="reject"
              handleClick={this.rejectCard}
              disable={this.disable}
            />
            <Button
              type="accept"
              handleClick={this.acceptCard}
              disable={this.disable}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
