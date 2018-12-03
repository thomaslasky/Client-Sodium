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

export default class CardDeckCustomPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: [],
      selectedGlobalImages: []
    };
  }

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value,
      selectedGlobalImage: event.target.dataset.img
    });
  };
}
