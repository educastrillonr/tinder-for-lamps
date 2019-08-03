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
        disabled={this.props.disable}
        className={styles.btnStyle}
        style={this.getButtonStyle()}
        onClick={this.props.handleClick}
      ></button>
    );
  }
}

export default Button;
