import React from "react";
import Style from "./ImageThumbnail.module.css";

const ImageThumbnail = props => {
  return (
    <a href={props.imgSrc} className="d-block p-2 h-100 col-lg-3 col-md-6 p-0">
      <img
        className={`img-fluid img-thumbnail ${Style.imgThumb}`}
        src={props.imgSrc}
        alt=""
      />
    </a>
  );
};

export default ImageThumbnail;
