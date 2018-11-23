import React from "react";
import CardOptions from "../components/CardOptions/CardOptions";

// à récupérer en bdd
const options = [
  {
    id: 1,
    name: "bleu"
  },
  {
    id: 2,
    name: "rouge"
  }
];

function QuiPage() {
  return (
    <div>
      <h1>wesh</h1>
      <CardOptions title="Poignées" options={options} />
    </div>
  );
}

export default QuiPage;
