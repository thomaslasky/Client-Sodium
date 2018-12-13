import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import cssClasses from "./Contact.module.css";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import withText from "../withText.hoc";

function ContactPage(props) {
    function handleContactSubmit(credentials) {
        let contact = new URLSearchParams();
        contact.append("objet", credentials.objet);
        contact.append("email", credentials.email);
        contact.append("message", credentials.message);
        contact.append("telephone", credentials.telephone);
        
        axios
            .post("http://cours/TestReact/mail.php", contact)
            .then(function (response) {
                if (response.data["Response"] === true) {
                    return toast.success("Email envoyé !", {
                        position       : "bottom-right",
                        autoClose      : 5000,
                        hideProgressBar: true,
                        closeOnClick   : true,
                        pauseOnHover   : true,
                        draggable      : true
                    });
                } else {
                    return toast.warn("Une erreur est survenu, veuillez reessayer", {
                        position       : "bottom-right",
                        autoClose      : 5000,
                        hideProgressBar: true,
                        closeOnClick   : true,
                        pauseOnHover   : true,
                        draggable      : true
                    });
                }
            });
    }
    
    return (
        <div className="col-md-6 m-auto" id="contain-contact">
            <Form
                className="mb-2 mt-5"
                onSubmit={e => {
                    e.preventDefault();
                    const email = e.target.elements.email.value;
                    const telephone = e.target.elements.tel.value;
                    const objet = e.target.elements.objet.value;
                    const message = e.target.elements.message.value;
                    
                    handleContactSubmit({email, telephone, objet, message});
                }}
            >
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
                            {props.t("textLabelFormPhone")}
                        </InputGroupAddon>
                        <Input
                            placeholder={props.t("textPlaceFormPhone")}
                            type="tel"
                            name="tel"
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            {props.t("textLabelFormObject")}
                        </InputGroupAddon>
                        <Input
                            placeholder={props.t("textPlaceFormObject")}
                            type="text"
                            name="objet"
                            required
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroupAddon addonType="prepend" className={cssClasses.urMessage}>
                        {props.t("textLabelFormMessage")}
                    </InputGroupAddon>
                    <Input type="textarea" id="message" rows="10" name="message" />
                </FormGroup>
                <Button className="m-auto d-block">Submit</Button>
            </Form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default withText(ContactPage);
