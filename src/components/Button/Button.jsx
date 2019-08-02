import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  state = {
    type: this.props.type
  };

  getButtonStyle = () => {
    if (this.state.type === "accept") {
      return { background: "green" };
    } else if (this.state.type === "reject") {
      return { background: "red" };
    }
  };
  render() {
    return (
      <button
        className={styles.btnStyle}
        style={this.getButtonStyle()}
        onClick={this.handleClick}
      ></button>
    );
  }
}

export default Button;
