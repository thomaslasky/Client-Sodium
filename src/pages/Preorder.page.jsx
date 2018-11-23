import React from "react";
import CardOptionForm from "../components/CardOptionForm/CardOptionForm";
import CardCustomPartDescription from "../components/CardCustomPartDescription/CardCustomPartDescription";

// à récupérer en bdd
const customPart = {
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
};

function Preorder() {
  return (
    <div>
      <div>
        <h1>wesh</h1>
        <CardOptionForm title={customPart.name} options={customPart.options} />
      </div>
      <div>
        <CardCustomPartDescription customPart={customPart} />
      </div>
    </div>
  );
}

export default Preorder;
