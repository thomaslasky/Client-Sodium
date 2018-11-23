import React from "react";
import CardOptionForm from "../components/CardOptionForm/CardOptionForm";
import CardCustomPartDescription from "../components/CardCustomPartDescription/CardCustomPartDescription";
import CardDeckCustomPart from "../components/CardDeckCustomPart/CardDeckCustomPart";
// à récupérer en bdd
const customParts = [
  {
    id: 1,
    name: "Poignées",
    options: [
      {
        id: 1,
        name: "bleu",
        description: "Super poignées bleues"
      },
      {
        id: 2,
        name: "rouge",
        description: "Super poignées rouges"
      }
    ]
  },
  {
    id: 2,
    name: "Guidon",
    options: [
      {
        id: 1,
        name: "Haut",
        description: "Super guidon haut"
      },
      {
        id: 2,
        name: "Bas",
        description: "Super guidon bas"
      }
    ]
  }
];

function Preorder() {
  return (
    <div className="container-fluid mt-2">
      {customParts.map(customPart => (
        <div className="row mb-2">
          <CardDeckCustomPart customPart={customPart} />
        </div>
      ))}
    </div>
  );
}

export default Preorder;
