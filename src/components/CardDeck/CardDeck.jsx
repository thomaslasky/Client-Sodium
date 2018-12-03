import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";
import style from "./CardDeck.module.css";

const Deck = props => {
  return (
    <CardDeck>
      <Card className={`${style.cardPerso}`}>
        <CardImg top width="100%" src={props.pix1} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title1}</CardTitle>
          <CardText>{props.text1}</CardText>
        </CardBody>
      </Card>
      <Card className={`${style.cardPerso}`}>
        <CardImg top width="100%" src={props.pix2} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title2}</CardTitle>
          <CardText>{props.text2}</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Deck;
