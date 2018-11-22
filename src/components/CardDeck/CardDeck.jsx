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

const Example = props => {
  return (
    <CardDeck className="mx-auto">
      <Card className={`${style.cardPerso} mr-sm-2 mr-lg-5`}>
        <CardImg top width="100%" src={props.pix1} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title1}</CardTitle>
          <CardText>{props.text1}</CardText>
        </CardBody>
      </Card>
      <Card className={`${style.cardPerso} ml-sm-2 ml-lg-5`}>
        <CardImg top width="100%" src={props.pix2} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title2}</CardTitle>
          <CardText>{props.text2}</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;
