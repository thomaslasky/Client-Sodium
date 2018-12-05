import React from "react";
import CardInfo from "../components/CardInfo/CardInfo";

import pic1 from "../assets/Images/Background/1.png";
import pic2 from "../assets/Images/Background/2.jpg";
import Carousel from "../components/Carousel/Carousel";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="p-0 w-100 col-sm-12 offset-md-1 col-md-10 mt-2">
          <Carousel />
        </div>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-6 p-0">
              <CardInfo
                backgroundCard={`${pic1}`}
                titleCard={this.props.texts ? this.props.texts.titrepage : ""}
                link="https://test.fr"
                linkName="Exemple"
              />
            </div>
            <div className="col-md-6 p-0">
              <CardInfo
                backgroundCard={`${pic2}`}
                titleCard="Titre TEST"
                link="https://test.fr"
                linkName="Exemple"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
