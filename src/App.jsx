import React, { Component } from "react";
import Routes from "./components/Routes";
import TinderPage from "./containers/TinderPage";
import { storage } from "./firebase";
import "./App.css";
import { navigate } from "@reach/router";

class App extends Component {
  state = {
    images: []
  };

  handleFileInput = e => {
    if (e.target.files.length > 0) {
      const images = [...e.target.files];
      images.map(image => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
          "state_changed",
          snapshot => {
            console.log(snapshot);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                const urls = [...this.state.images];
                urls.push(url);
                this.setState({ images: [...urls] });
                if (this.state.images.length === images.length) {
                  navigate("/TinderPage");
                }
              });
          }
        );
      });
    }
  };

  render() {
    return (
      <div className="App">
        <section className="main-wrapper">
          <Routes
            handleFileInput={this.handleFileInput}
            images={this.state.images}
          />
        </section>
      </div>
    );
  }
}

export default App;
