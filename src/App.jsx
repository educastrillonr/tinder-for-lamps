import React, { Component } from "react";
import Routes from "./components/Routes";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <section className="main-wrapper">
          <Routes />
        </section>
      </div>
    );
  }
}

export default App;
