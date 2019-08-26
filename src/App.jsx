import React, { Component } from "react";
import Routes from "./components/Routes";
import TinderPage from "./containers/TinderPage";
import { storage } from "./firebase";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    isFinished: false
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
              });
          }
        );
      });
    }
    // return <TinderPage url={this.state.url} />;
  };

  render() {
    // if (this.state.images.length === 2) {
    //   console.log("hello");

    //   this.setState({
    //     isFinished: true
    //   });
    // }
    return (
      <div className="App">
        <section className="main-wrapper">
          <Routes
            handleFileInput={this.handleFileInput}
            images={this.state.images}
            isFinished={this.state.isFinished}
          />
          {/* <TinderPage url={this.state.url} /> */}
        </section>
      </div>
    );
  }
}

export default App;
