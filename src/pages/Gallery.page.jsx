import React from "react";
import ImageThumbnail from "../components/ImageThumbnail/ImageThumbnail";

function Gallery() {
  return (
    <div className="container m-2">
      <div className="row text-center text-lg-left">
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
      </div>
      <div className="row text-center text-lg-left">
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
      </div>
      <div className="row text-center text-lg-left">
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
      </div>
    </div>
  );
}

export default Gallery;
