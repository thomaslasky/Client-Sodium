import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Alert,
} from 'reactstrap';
import cssClasses from "./Contact.module.css";
import axios from "axios";
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
    
    function handleContactSubmit(credentials) {
        
        let contact = new URLSearchParams();
        contact.append('objet', credentials.objet);
        contact.append('email', credentials.email);
        contact.append('message', credentials.message);
        contact.append('telephone', credentials.telephone);
        
        axios.post("http://cours/TestReact/mail.php", contact)
             .then(function (response) {
                 if (response.data["Response"] === true) {
                     return toast.success('Email envoyé !', {
                         position       : "bottom-right",
                         autoClose      : 5000,
                         hideProgressBar: true,
                         closeOnClick   : true,
                         pauseOnHover   : true,
                         draggable      : true,
                     });
                 } else {
                     return toast.warn('Une erreur est survenu, veuillez reessayer', {
                         position       : "bottom-right",
                         autoClose      : 5000,
                         hideProgressBar: true,
                         closeOnClick   : true,
                         pauseOnHover   : true,
                         draggable      : true,
                     });
                 }
             });
    }
    
    return <div className="col-md-6 m-auto" id="contain-contact">
        <div className="mt-3">
            <h1 className="text-center">Nous contacter</h1>
        </div>
        <Form className="mb-2" onSubmit={e => {
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
                    <Input placeholder="email" type="email" name="email" required />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Téléphone</InputGroupAddon>
                    <Input placeholder="téléphone (facultatif)" type="tel" name="tel" />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Objet</InputGroupAddon>
                    <Input placeholder="objet" type="text" name="objet" required />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <InputGroupAddon addonType="prepend" className={cssClasses.urMessage}>Votre Message</InputGroupAddon>
                <Input type="textarea" id="message" rows="10" name="message" />
            </FormGroup>
            <Button className="m-auto d-block">Submit</Button>
        </Form>
        <ToastContainer position="bottom-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover />
    </div>;
}
