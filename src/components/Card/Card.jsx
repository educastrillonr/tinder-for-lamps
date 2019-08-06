import React, { Component } from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";

class Card extends Component {
  state = {};

  render() {
    return (
      <article className={styles.card} style={this.props.style}>
        <img src={this.props.cardData.image} alt=""></img>
      </article>
    );
  }
}

Card.propTypes = {
  cardData: PropTypes.shape({
    image: PropTypes.string
  })
};

export default Card;
