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

const CardCustomPartDescription = props => {
  return (
    <div>
      <Card className="d-flex flex-row">
        <CardImg
          left
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
          className="w-25"
        />
        <CardBody>
          <CardTitle>{props.customPart.name}</CardTitle>

          <CardText>
            <ul>
              {props.customPart.options.map(option => (
                <li key={option.id}>{option.description}</li>
              ))}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardCustomPartDescription;
