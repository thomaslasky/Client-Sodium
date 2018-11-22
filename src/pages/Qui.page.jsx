import React from "react";
import CardPerso from "../components/CardPerso/CardPerso";
import CardDeck from "../components/CardDeck/CardDeck";
import pix1 from "../assets/Images/Perso/1.jpg";
import pix2 from "../assets/Images/Perso/2.jpg";

//textes à récupérer en bdd
const text1 =
  "Alfonso est un soudeur de formation, qui fait référence dans les milieux de l'auto et de la moto custom, il a des compétences en process d'industrialisation et fabrication...le Boss dans l'atelier";
const text2 =
  "Benoît a de multiples formations universitaires allant des technologies industrielles à la communication en passant par l'aménagement du territoire. Il a travaillé dans l'automobile de compétition et a été agriculteur biologique pendant une dizaine d'années...le Boss dans les bureaux";

function QuiPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-2">
          <CardDeck
            pix1={pix1}
            title1="Alfonso"
            text1={text1}
            pix2={pix2}
            title2="Benoît Marty"
            text2={text2}
          />
        </div>
        {/* <div className="card-deck">
        <div className="card- mt-2">
          <div className="col-lg-4 mb-2">
            <CardPerso pix={pix1} title="Alfonso" text={text1} />
          </div>
          <div className="col-lg-4 mb-2">
            <CardPerso pix={pix2} title="Benoit Marty" text={text2} />
          </div>
		</div> */}
      </div>
    </div>
  );
}

export default QuiPage;
