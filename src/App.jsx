import React, { Component } from "react";
import Routes from "./components/Routes";
import AppBar from "./containers/AppBar";
import { storage } from "./firebase";
import "./App.css";
import { navigate } from "@reach/router";

class App extends Component {
  state = {
    images: [],
    loading: false
  };

  updateLoading = loading => {
    this.setState({
      loading
    });
  };

  handleFileInput = e => {
    if (e.target.files.length > 0) {
      const images = [...e.target.files];
      images.map(image => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
          "state_changed",
          snapshot => {
            if (snapshot.state === "running") {
              this.updateLoading(true);
            }
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
                  this.updateLoading(false);
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
        <header className="header">
          <AppBar />
        </header>
        <section className="main-wrapper">
          <Routes
            handleFileInput={this.handleFileInput}
            images={this.state.images}
            updateLoading={this.updateLoading}
            loading={this.state.loading}
          />
        </section>
      </div>
    );
  }
}

export default App;
