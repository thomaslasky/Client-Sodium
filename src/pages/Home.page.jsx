import React from "react";
import CardInfo from "../components/CardInfo/CardInfo";
import Carousel from "../components/Carousel/Carousel";

import withText from "../withText.hoc";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="p-0 w-100 col-sm-12 offset-md-1 col-md-10 mt-2">
          <Carousel
            captionHomeCarousel1={this.props.t("captionHomeCarousel1")}
            captionHomeCarousel2={this.props.t("captionHomeCarousel2")}
            captionHomeCarousel3={this.props.t("captionHomeCarousel3")}
            imageHomeCarousel1={
              this.props.images ? this.props.images.imageHomeCarousel1 : ""
            }
            imageHomeCarousel2={
              this.props.images ? this.props.images.imageHomeCarousel2 : ""
            }
            imageHomeCarousel3={
              this.props.images ? this.props.images.imageHomeCarousel3 : ""
            }
          />
        </div>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-6 p-0">
              <CardInfo
                backgroundCard={
                  this.props.images ? this.props.images.imageHomeCard1 : ""
                }
                titleCard={this.props.t("titreHomeCard1")}
                descCard={this.props.t("descHomeCard1")}
                link={this.props.t("linkHomeCard1")}
                linkName={this.props.t("linkNameHomeCard1")}
              />
            </div>
            <div className="col-md-6 p-0">
              <CardInfo
                backgroundCard={
                  this.props.images ? this.props.images.imageHomeCard2 : ""
                }
                titleCard={this.props.t("titreHomeCard2")}
                descCard={this.props.t("descHomeCard2")}
                link={this.props.t("linkHomeCard2")}
                linkName={this.props.t("linkNameHomeCard2")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withText(Home);
