import React from "react";
import ImageThumbnail from "../components/ImageThumbnail/ImageThumbnail";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.css";

const images = [
  "http://placehold.it/400x300",
  "http://placehold.it/400x300",
  "http://placehold.it/400x300",
  "http://placehold.it/400x300",
  "http://placehold.it/400x300",
  "http://placehold.it/400x300",
  "http://placehold.it/400x300"
];

export default class Gallery extends React.Component {
  componentDidMount() {
    baguetteBox.run(".gallery");
  }

  render() {
    return (
      <div className="container mx-auto m-2">
        <div className="row text-center text-lg-left mb-lg-4 mt-lg-4 gallery">
          {images.map((image, index) => (
            <ImageThumbnail imgSrc={image} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
