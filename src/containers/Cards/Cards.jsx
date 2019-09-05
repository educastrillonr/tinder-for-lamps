import React, { Component } from "react";
import Card from "../../components/Card";
import styles from "./Cards.module.scss";

class Cards extends Component {
  state = {
    cards: this.props.cards
  };

  getCardStyle = () => {
    return this.props.page === 0
      ? { position: "absolute" }
      : { position: "relative" };
  };

  render() {
    return (
      <section className={styles.cardsContainer}>
        {this.state.cards.map((card, index) => (
          <Card
            acceptCard={this.props.acceptCard}
            rejectCard={this.props.rejectCard}
            cardData={card}
            key={index}
            style={this.getCardStyle()}
          />
        ))}
      </section>
    );
  }
}

export default Cards;
