import React from "react";
import CardDeck from "../components/CardDeck/CardDeck";
import pix1 from "../assets/Images/Techno/moteur.jpg";
import pix3 from "../assets/Images/Techno/batteries.png";
import pix2 from "../assets/Images/Techno/amorto.jpg";
import pix4 from "../assets/Images/Techno/controleur.jpg";

//textes à récupérer en bdd

const text1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ";

function QuiPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-sm-4 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={pix1}
              title1="Moteur"
              text1={text1}
              pix2={pix2}
              title2="Amortisseur"
              text2={text1}
            />
          </div>
        </div>
        <div className="row mt-2 mb-sm-2 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={pix3}
              title1="Batteries"
              text1={text1}
              pix2={pix4}
              title2="Controleur"
              text2={text1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuiPage;
