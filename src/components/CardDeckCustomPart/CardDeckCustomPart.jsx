import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardFooter,
  CardBody
} from "reactstrap";
import style from "./CardDeckCustomPart.module.css";

const CardDeckCustomPart = props => {
  return (
    <CardGroup className="w-100">
      <Card className="col-md-3 mb-0">
        <CardBody>
          <CardTitle>{props.customPart.name}</CardTitle>
          {props.customPart.options.map(option => (
            <div>
              <label>
                {option.name} :
                <input
                  type="radio"
                  value={option.id}
                  name={props.title}
                  className="ml-1"
                />
              </label>
            </div>
          ))}
        </CardBody>
      </Card>
      <Card className="col-md-6 mb-0 p-0 d-flex flex-row">
        <CardImg
          left
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt={props.customPart.name}
          className={`${style.imgCustomPart}`}
        />
        <div>
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
          <div>image miniature options</div>
        </div>
      </Card>
      <Card className="col-md-3 mb-0 p-0 d-flex justify-content-center">
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
      </Card>
    </CardGroup>
  );
};

export default CardDeckCustomPart;
