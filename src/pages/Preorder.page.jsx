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

export default class Preorder extends React.Component {
  constructor(props) {
    super(props);
  }

  customParts = [
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

  handlePreorderSubmit(formInputs) {
    let preorder = new URLSearchParams();
    let filteredFormInputs = formInputs.filter(
      input => !(input.type === "radio" && input.checked === false)
    );

    // let selectedOptions = formInputs.filter(
    //   input => (input.type === "radio" && input.checked === true)
    // )
    // selectedOptions.map((selectedOption => selectedOption. ))

    let inputsToString = filteredFormInputs.map(inputObject =>
      JSON.stringify(inputObject)
    );
    let inputsWithSeparator = inputsToString.join("|");
    preorder.append("inputs", inputsWithSeparator);

    axios.post("http://localhost:8000/preorder", preorder);
  }

  render() {
    return (
      <div className="container-fluid mt-2">
        <Form
          onSubmit={e => {
            e.preventDefault();
            const fields = Object.values(e.target.elements).map(input => ({
              name: input.name,
              value: input.value,
              checked: input.checked,
              type: input.type
            }));
            this.handlePreorderSubmit(fields);
          }}
        >
          {this.customParts.map(customPart => (
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
}
