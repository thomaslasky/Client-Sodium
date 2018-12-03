import React from "react";
import CardDeck from "../components/CardDeck/CardDeck";
import pix1 from "../assets/Images/Perso/1.jpg";
import pix2 from "../assets/Images/Perso/2.jpg";
import CardTextOnly from "../components/CardTextOnly/CardTextOnly";

//textes à récupérer en bdd
const text1 =
  "Alfonso est un soudeur de formation, qui fait référence dans les milieux de l'auto et de la moto custom, il a des compétences en process d'industrialisation et fabrication...le Boss dans l'atelier";
const text2 =
  "Benoît a de multiples formations universitaires allant des technologies industrielles à la communication en passant par l'aménagement du territoire. Il a travaillé dans l'automobile de compétition et a été agriculteur biologique pendant une dizaine d'années...le Boss dans les bureaux";
const text3 =
  "C'est la corrélation de nos valeurs et des compétences acquises durant nos parcours universitaires et professionnels qui nous a amené à développer ce projet. La décision de se lancer dans ce projet a été motivée, par ailleurs, par notre volonté commune de créer une activité, et par extension une entreprise (nous avons tous les deux des expériences antérieures de chefs d'entreprises).";

function QuiPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2 mb-sm-2 mb-0">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardDeck
              pix1={pix1}
              title1="Alfonso"
              text1={text1}
              pix2={pix2}
              title2="Benoît Marty"
              text2={text2}
            />
          </div>
        </div>
        <div className="row mb-sm-2 mb-2">
          <div className="col-xs-12 col-md-8 offset-md-2 ">
            <CardTextOnly text={text3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuiPage;
