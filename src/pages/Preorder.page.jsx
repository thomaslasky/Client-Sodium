import React from "react";
import CardDeckCustomPart from "../components/CardDeckCustomPart/CardDeckCustomPart";
// à récupérer en bdd
import ImagePart1 from "../assets/Images/Part/bp.png";
import ImageOption11 from "../assets/Images/Part/b.png";
import ImageGlobalOption11 from "../assets/Images/Part/bp.png";
import ImageOption12 from "../assets/Images/Part/g.png";
import ImageGlobalOption12 from "../assets/Images/Part/gp.png";

const customParts = [
  {
    id: 1,
    name: "Porte-bagage",
    image: ImagePart1,
    options: [
      {
        id: 1,
        name: "sans",
        description: "pas de porte bagage",
        prix: null
      },
      {
        id: 2,
        name: "bac",
        description: "porte bagage fermé",
        prix: "50 €",
        imageOption: ImageOption11,
        imageGlobal: ImageGlobalOption11
      },
      {
        id: 3,
        name: "classique",
        description: "porte bagage en métal",
        prix: "30 €",
        imageOption: ImageOption12,
        imageGlobal: ImageGlobalOption12
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
        <div className="row mb-2" key={customPart.id}>
          <CardDeckCustomPart customPart={customPart} />
        </div>
      ))}
    </div>
  );
}

export default Preorder;
