import React, { Component } from "react";
import Cards from "../Cards";
import styles from "./TinderPage.module.scss";

class TinderPage extends Component {
  state = {
    isFinished: false,
    filteredData: [...this.props.images]
  };

  acceptedCards = [];
  rejectedCards = [];

  checkArray = () => {
    if (this.state.filteredData.length <= 0) {
      this.setState({ isFinished: true });
      this.updateArray(this.acceptedCards);
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

  getMainSection = () => {
    return (
      <section className={styles.mainWrapper}>
        <div className={styles.cardContainer}>
          <Cards
            acceptCard={this.acceptCard}
            rejectCard={this.rejectCard}
            cards={this.state.filteredData}
            page={0}
          />
        </div>
      </section>
    );
  };

  render() {
    if (!this.state.isFinished) {
      return this.getMainSection();
    } else {
      return (
        <section className={styles.resultsWrapper}>
          <Cards cards={this.acceptedCards} page={1} />
        </section>
      );
    }
  }
}

export default TinderPage;
