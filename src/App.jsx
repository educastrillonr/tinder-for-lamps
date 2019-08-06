import React, { Component } from "react";
import Routes from "./components/Routes";
import "./App.css";

class App extends Component {
<<<<<<< HEAD
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
=======
  state = {};
>>>>>>> 1235d5db90d9b2a966a79fc1b0517b46132431ce

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
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
=======
        <section className="main-wrapper">
          <Routes />
>>>>>>> 1235d5db90d9b2a966a79fc1b0517b46132431ce
        </section>
      </div>
    );
  }
}

export default App;
