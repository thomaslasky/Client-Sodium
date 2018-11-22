import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styleCard from "./CardPerso.module.css";

function CardPerso(props) {
  return (
    <div>
      <Card className={` ${styleCard.cardPerso}`}>
        {/* "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" */}
        <CardImg
          top
          className={`${styleCard.imgPerso}`}
          src={props.pix}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="persoTitle">{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardPerso;
