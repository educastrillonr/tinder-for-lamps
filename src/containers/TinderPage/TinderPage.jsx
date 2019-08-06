import React, { Component } from "react";
import Cards from "../Cards";
import Button from "../../components/Button";
import styles from "./TinderPage.module.scss";
import data from "../../assets/data/data";

class TinderPage extends Component {
  state = {
    isFinished: false,
    filteredData: data
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

  getButtons = () => {
    return (
      <div className={styles.btnContainer}>
        <Button type="reject" handleClick={this.rejectCard} />
        <Button type="accept" handleClick={this.acceptCard} />
      </div>
    );
  };

  getMainSection = () => {
    return (
      <section className={styles.mainWrapper}>
        <div className={styles.cardContainer}>
          {/* <Cards cards={this.rejectedCards} /> */}
          <Cards cards={this.state.filteredData} page={0} />
          {/* <Cards cards={this.acceptedCards} /> */}
        </div>
        {this.getButtons()}
      </section>
    );
  };

  // getStylesForCards = () => {
  //   return this.state.filteredData === this.acceptedCards ? 1 : 0;
  // };

  render() {
    if (!this.state.isFinished) {
      return this.getMainSection();
    } else {
      console.log(this.state.filteredData);
      return (
        <section className={styles.resultsWrapper}>
          <Cards cards={this.acceptedCards} page={1} />
        </section>
      );
    }
  }
}

export default TinderPage;
