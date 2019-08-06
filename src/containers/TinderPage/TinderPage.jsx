import React, { Component } from "react";
import Cards from "../Cards";
import Button from "../../components/Button";
import styles from "./TinderPage.module.scss";
import data from "../../assets/data/data";

class TinderPage extends Component {
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
      <section className={styles.mainWrapper}>
        <div className={styles.cardContainer}>
          {/* <Cards cards={this.rejectedCards} /> */}
          <Cards cards={this.state.filteredData} />
          {/* <Cards cards={this.acceptedCards} /> */}
        </div>
        <div className={styles.btnContainer}>
          <Button type="reject" handleClick={this.rejectCard} />
          <Button type="accept" handleClick={this.acceptCard} />
        </div>
      </section>
    );
  }
}

export default TinderPage;
