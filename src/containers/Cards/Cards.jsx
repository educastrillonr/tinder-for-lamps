import React, { Component } from "react";
import Card from "../../components/Card";
import styles from "./Cards.module.scss";

class Cards extends Component {
  state = {
    cards: this.props.cards
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props.cards) {
  //     this.setState({
  //       cards: this.props.cards
  //     });
  //   }
  // }

  getCardStyle = () => {
    return this.props.page === 0
      ? { position: "absolute" }
      : { position: "relative" };
  };

  render() {
    return (
      <section className={styles.cardsContainer}>
        {this.state.cards.map((card, index) => (
          <Card cardData={card} key={index} style={this.getCardStyle()} />
        ))}
      </section>
    );
  }
}

export default Cards;
