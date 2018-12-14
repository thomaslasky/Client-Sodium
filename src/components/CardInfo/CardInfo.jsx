import React from "react";
import cssClasses from "./CardInfo.module.css";
import { Link } from "react-router-dom";

function CardInfo({ backgroundCard, titleCard, link, linkName, descCard }) {
  return (
    <div
      className={`${cssClasses.card} m-2`}
      style={{
        backgroundImage: `url(${backgroundCard})`
      }}
    >
      <div className="h-100">
        <h1 className={`${cssClasses.containCardh1}`}>{`${titleCard}`}</h1>
        <div className={`${cssClasses.containCardText} col-md-10 offset-md-1`}>
          <p className={`${cssClasses.containCardp}`}>{descCard}</p>

          <Link className="text-center d-block w-100" to={link}>
            {linkName}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
