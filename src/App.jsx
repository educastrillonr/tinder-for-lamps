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

  rejectCard = () => {
    let copy = this.state.filteredData;
    this.rejectedCards.push(copy.pop());
    this.setState({
      filteredData: copy
    });
  };

  acceptCard = () => {
    let copy = this.state.filteredData;
    this.acceptedCards.push(copy.pop());
    this.setState({
      filteredData: copy
    });
  };

  render() {
    return (
      <div className="App">
        <Button type="reject" handleClick={this.rejectCard} />
        <Cards cards={this.rejectedCards} />
        <Cards cards={this.state.filteredData} />
        <Cards cards={this.acceptedCards} />
        <Button type="accept" handleClick={this.acceptCard} />
      </div>
    );
  }
}

export default App;
