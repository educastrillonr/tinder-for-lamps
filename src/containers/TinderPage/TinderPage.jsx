import React, { Component } from "react";
import Cards from "../Cards";
import Button from "../../components/Button";
import styles from "./TinderPage.module.scss";

class TinderPage extends Component {
  state = {};
  render() {
    return (
      <section className={styles.mainWrapper}>
        <div className={styles.cardContainer}>
          {/* <Cards cards={this.rejectedCards} /> */}
          <Cards cards={this.props.filteredData} page={0} />
          {/* <Cards cards={this.acceptedCards} /> */}
        </div>
        <div className={styles.btnContainer}>
          <Button type="reject" handleClick={this.props.rejectCard} />
          <Button type="accept" handleClick={this.props.acceptCard} />
        </div>
      </section>
    );
  }
}

export default TinderPage;
