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
    <CardGroup className={`w-100 ${style.groupe}`}>
      <Card className="col-md-2 mb-0">
        <CardBody>
          <CardTitle>{props.customPart.name}</CardTitle>
          {props.customPart.options.map(option => (
            <div>
              <label>
                <input
                  type="radio"
                  value={option.id}
                  name={props.customPart.name}
                  className="mr-1"
                />
                {option.name} {option.prix ? "(+ " + option.prix + ")" : null}
              </label>
            </div>
          ))}
        </CardBody>
      </Card>
      <Card className="col-md-7 mb-0 p-0 mr-2 d-flex flex-row">
        <CardImg
          left
          src={props.customPart.image}
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
          <div className={`d-flex flex-row ${style.miniContainer}`}>
            {props.customPart.options.map(option =>
              option.imageOption ? (
                <img
                  className={`${style.imgOption}`}
                  src={option.imageOption}
                />
              ) : null
            )}
          </div>
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
