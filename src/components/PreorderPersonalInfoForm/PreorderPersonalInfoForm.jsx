import React from "react";
import { FormGroup, Input, InputGroup, InputGroupAddon } from "reactstrap";
import withText from "../../withText.hoc";

function PreorderPersonalInfoForm(props) {
  return (
    <div>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input
            placeholder={props.t("textFormMail")}
            type="email"
            name="email"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            {props.t("textLabelFormName")}
          </InputGroupAddon>
          <Input
            placeholder={props.t("textPlaceFormName")}
            type="text"
            name="prenom"
            required
            className="mr-1"
          />

          <InputGroupAddon addonType="prepend">
            {props.t("textLabelFormSurname")}
          </InputGroupAddon>
          <Input
            //placeholder={props.t("textPlaceFormSurname")}
            type="text"
            name="nom"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            {props.t("textLabelFormPC")}
          </InputGroupAddon>
          <Input
            //placeholder="CodePostal"
            type="text"
            name="codePostal"
            required
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            {props.t("textLabelFormPhone")}
          </InputGroupAddon>
          <Input
            placeholder={props.t("textPlaceFormPhone")}
            type="tel"
            name="telephone"
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroupAddon addonType="prepend">
          {props.t("textLabelFormMessage")}
        </InputGroupAddon>
        <Input
          type="textarea"
          id="message"
          rows="8"
          required
          placeholder={props.t("textPlaceFormMessage")}
          name="message"
        />
      </FormGroup>
    </div>
  );
}

export default withText(PreorderPersonalInfoForm);
