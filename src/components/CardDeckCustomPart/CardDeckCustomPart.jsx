import React from "react";
import { Card, CardImg, CardTitle, CardGroup, CardBody } from "reactstrap";
import style from "./CardDeckCustomPart.module.css";

export default class CardDeckCustomPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      selectedGlobalImage: ""
    };
  }

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value,
      selectedGlobalImage: event.target.dataset.img
    });
  };

  render() {
    return (
      <CardGroup className={`w-100 ${style.groupe}`}>
        <Card className="col-md-2 col-sm-12 mb-0">
          <CardBody>
            <CardTitle>{this.props.customPart.name}</CardTitle>
            <ul className="list-unstyled">
              {this.props.customPart.options.map(option => (
                <li key={option.id}>
                  <label>
                    <input
                      type="radio"
                      value={option.name}
                      name={this.props.customPart.name}
                      data-img={option.imageGlobal}
                      onChange={this.handleOptionChange}
                      className="mr-1"
                    />
                    {option.name}{" "}
                    {option.prix ? "(+ " + option.prix + ")" : null}
                  </label>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        <Card className="col-md-7 col-sm-12 mb-0 p-0 d-flex flex-row">
          <CardImg
            src={this.props.customPart.image}
            alt={this.props.customPart.name}
            className={`${style.imgCustomPart}`}
          />
          <div>
            <CardBody>
              <CardTitle>{this.props.customPart.name}</CardTitle>
              <div>
                <ul>
                  {this.props.customPart.options.map(option => (
                    <li key={option.id}>{option.description}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <div className={`d-flex flex-row ${style.miniContainer}`}>
              {this.props.customPart.options.map(option =>
                option.imageOption ? (
                  <img
                    className={`${style.imgOption}`}
                    src={option.imageOption}
                    key={option.id}
                  />
                ) : null
              )}
            </div>
          </div>
        </Card>
        {this.state.selectedGlobalImage ? (
          <Card className="col-lg-3 mb-0 p-0 d-flex justify-content-center">
            <CardImg
              top
              width="100%"
              src={this.state.selectedGlobalImage}
              alt="Card image cap"
            />
          </Card>
        ) : null}
      </CardGroup>
    );
  }
}
