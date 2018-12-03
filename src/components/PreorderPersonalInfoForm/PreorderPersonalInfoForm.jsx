import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

function PreorderPersonalInfoForm() {
  return (
    <div>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="Email" type="email" name="email" required />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Prénom</InputGroupAddon>
          <Input
            placeholder="Prenom"
            type="text"
            name="prenom"
            required
            className="mr-1"
          />

          <InputGroupAddon addonType="prepend">Nom</InputGroupAddon>
          <Input placeholder="Nom" type="text" name="nom" required />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Code Postal</InputGroupAddon>
          <Input
            placeholder="CodePostal"
            type="text"
            name="codePostal"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Téléphone</InputGroupAddon>
          <Input
            placeholder="Téléphone (facultatif)"
            type="tel"
            name="telephone"
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroupAddon addonType="prepend">Votre Message</InputGroupAddon>
        <Input
          type="textarea"
          id="message"
          rows="8"
          required
          placeholder="Voulez-vous ajouter un commentaire ?"
          name="message"
        />
      </FormGroup>
    </div>
  );
}

export default PreorderPersonalInfoForm;
