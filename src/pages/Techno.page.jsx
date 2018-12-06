import React from "react";
import CardDeck from "../components/CardDeck/CardDeck";
import pix1 from "../assets/Images/Techno/moteur.jpg";
import pix3 from "../assets/Images/Techno/batteries.png";
import pix2 from "../assets/Images/Techno/amorto.jpg";
import pix4 from "../assets/Images/Techno/controleur.jpg";

function Techno({ texts }) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-sm-4 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={pix1}
              title1={texts ? texts.titreTechnoCard1 : ""}
              text1={texts ? texts.descTechnoCard1 : ""}
              pix2={pix2}
              title2={texts ? texts.titreTechnoCard2 : ""}
              text2={texts ? texts.descTechnoCard2 : ""}
            />
          </div>
        </div>
        <div className="row mt-2 mb-sm-2 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={pix3}
              title1={texts ? texts.titreTechnoCard3 : ""}
              text1={texts ? texts.descTechnoCard3 : ""}
              pix2={pix4}
              title2={texts ? texts.titreTechnoCard4 : ""}
              text2={texts ? texts.descTechnoCard4 : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techno;
