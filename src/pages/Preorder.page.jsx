import React from "react";
import CardDeckCustomPart from "../components/CardDeckCustomPart/CardDeckCustomPart";
import PreorderPersonalInfoForm from "../components/PreorderPersonalInfoForm/PreorderPersonalInfoForm";
import { Form, Button } from "reactstrap";
import axios from "axios";
// à récupérer en bdd
import ImagePart1 from "../assets/Images/Part/bp.png";
import ImageOption11 from "../assets/Images/Part/b.png";
import ImageGlobalOption11 from "../assets/Images/Part/bp.png";
import ImageOption12 from "../assets/Images/Part/g.png";
import ImageGlobalOption12 from "../assets/Images/Part/gp.png";
import ImagePart2 from "../assets/Images/Part/surf.jpg";
import ImageOption21 from "../assets/Images/Part/surfmini.png";
import ImageGlobalOption21 from "../assets/Images/Part/surfglobal.png";

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
    name: "Surf rack",
    image: ImagePart2,
    options: [
      {
        id: 4,
        name: "Sans",
        description: "pas de rack"
      },
      {
        id: 5,
        name: "Surf rack",
        description: "Super surf rack",
        imageOption: ImageOption21,
        imageGlobal: ImageGlobalOption21
      }
    ]
  }
];

function handlePreorderSubmit(credentials) {
  let preorder = new URLSearchParams();
  preorder.append("prenom", credentials.prenom);
  preorder.append("nom", credentials.nom);
  preorder.append("codePostal", credentials.codePostal);
  preorder.append("email", credentials.email);
  preorder.append("message", credentials.message);
  preorder.append("telephone", credentials.telephone);

  axios.post("http://localhost:8000/preorder", preorder);
}

function Preorder() {
  return (
    <div className="container-fluid mt-2">
      <Form
        onSubmit={e => {
          e.preventDefault();
          const prenom = e.target.elements.prenom.value;
          const nom = e.target.elements.nom.value;
          const codePostal = e.target.elements.codePostal.value;
          const email = e.target.elements.email.value;
          const telephone = e.target.elements.telephone.value;
          const message = e.target.elements.message.value;

          handlePreorderSubmit({
            prenom,
            nom,
            codePostal,
            email,
            telephone,
            message
          });
        }}
      >
        {customParts.map(customPart => (
          <div className="row mb-2" key={customPart.id}>
            <CardDeckCustomPart customPart={customPart} />
          </div>
        ))}
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <PreorderPersonalInfoForm />
          </div>
        </div>
        <Button className="m-auto d-block">Submit</Button>
      </Form>
    </div>
  );
}

export default Preorder;
