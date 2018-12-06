import React from "react";
import CardDeck from "../components/CardDeck/CardDeck";
import pix1 from "../assets/Images/Perso/1.jpg";
import pix2 from "../assets/Images/Perso/2.jpg";
import CardTextOnly from "../components/CardTextOnly/CardTextOnly";

function Who({ texts }) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-sm-2 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={pix1}
              title1={texts ? texts.titreWhoCard1 : ""}
              text1={texts ? texts.descWhoCard1 : ""}
              pix2={pix2}
              title2={texts ? texts.titreWhoCard2 : ""}
              text2={texts ? texts.descWhoCard2 : ""}
            />
          </div>
        </div>
        <div className="row mb-sm-2 mb-2">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardTextOnly text={texts ? texts.descWhoCard3 : ""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
