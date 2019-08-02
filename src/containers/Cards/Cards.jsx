import React, { Component } from "react";
import Card from "../../components/Card";
import styles from "./Cards.module.scss";

class Cards extends Component {
  state = {
    cards: this.props.cards
  };
  render() {
    return (
      <section className={styles.cardsContainer}>
        {this.state.cards.map((card, index) => (
          <Card cardData={card} key={index} />
        ))}
      </section>
    );
  }
}

export default Cards;
