import React from "react";
import CardDeck from "../components/CardDeck/CardDeck";
import withText from "../withText.hoc";

function Techno(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-sm-4 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={props.images ? props.images.imageTechnoCard1 : null}
              title1={props.t("titreTechnoCard1")}
              text1={props.t("descTechnoCard1")}
              pix2={props.images ? props.images.imageTechnoCard2 : null}
              title2={props.t("titreTechnoCard2")}
              text2={props.t("descTechnoCard2")}
            />
          </div>
        </div>
        <div className="row mt-2 mb-sm-2 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={props.images ? props.images.imageTechnoCard3 : null}
              title1={props.t("titreTechnoCard3")}
              text1={props.t("descTechnoCard3")}
              pix2={props.images ? props.images.imageTechnoCard4 : null}
              title2={props.t("titreTechnoCard4")}
              text2={props.t("descTechnoCard4")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withText(Techno);
