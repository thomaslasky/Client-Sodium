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

const CardOptions = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          {props.options.map(option => (
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
    </div>
  );
};

export default CardOptions;
