import React, { Component } from "react";
import { navigate } from "@reach/router";
import TinderPage from "../../containers/TinderPage";

class Upload extends Component {
  getImages = () => {
    if (this.props.images.length > 0) {
      return (
        <React.Fragment>
          {this.props.images.map((img, index) => (
            <img
              key={index}
              src={`${img}` || "https://placekitten.com/g/200/300"}
              alt=""
            />
          ))}
        </React.Fragment>
      );
    } else {
      return <p>loading...</p>;
    }
  };
  render() {
    // console.log(this.props.images);
    if (this.props.images.length === 5) {
      console.log(this.props.images);

      //   return <TinderPage images={this.props.images} />;
      navigate("/TinderPage");
    }
    return (
      <React.Fragment>
        <input type="file" multiple onChange={this.props.handleFileInput} />
        {/* {this.getImages()} */}
      </React.Fragment>
    );
  }
}

export default Upload;
