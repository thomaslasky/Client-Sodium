import React from "react";
import ImageThumbnail from "../components/ImageThumbnail/ImageThumbnail";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.css";

export default class Gallery extends React.Component {
  componentDidMount() {
    baguetteBox.run(".gallery");
  }

  render() {
    return (
      <div className="container mx-auto m-2">
        <div className="row text-center text-lg-left mb-lg-4 mt-lg-4 gallery">
          {this.props.images
            ? this.props.images.map((image, index) => (
                <ImageThumbnail imgSrc={image} key={index} />
              ))
            : null}
        </div>
      </div>
    );
  }
}
