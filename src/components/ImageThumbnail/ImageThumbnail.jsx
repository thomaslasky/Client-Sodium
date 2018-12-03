import React from "react";

const ImageThumbnail = props => {
  return (
    <div className="col-lg-3 col-md-4 col-xs-6 pr-1 pl-1">
      <a href="#" className="d-block mb-2 h-100">
        <img
          className="img-fluid img-thumbnail"
          src="http://placehold.it/400x300"
          alt=""
        />
      </a>
    </div>
  );
};

export default ImageThumbnail;
