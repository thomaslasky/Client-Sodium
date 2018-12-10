import React from "react";
import CardDeck from "../components/CardDeck/CardDeck";
import pix1 from "../assets/Images/Perso/1.jpg";
import pix2 from "../assets/Images/Perso/2.jpg";
import CardTextOnly from "../components/CardTextOnly/CardTextOnly";

import withText from "../withText.hoc";

function Who(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-sm-2 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={props.images ? props.images.imageWhoCard1 : null}
              title1={props.t("titreWhoCard1")}
              text1={props.t("descWhoCard1")}
              pix2={props.images ? props.images.imageWhoCard2 : null}
              title2={props.t("titreWhoCard2")}
              text2={props.t("descWhoCard2")}
            />
          </div>
        </div>
        <div className="row mb-sm-2 mb-2">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardTextOnly text={props.t("descWhoCard3")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withText(Who);
