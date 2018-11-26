import React from 'react';
import {
	Button,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
} from 'reactstrap';
import cssClasses from "./Contact.module.css";
import axios from "axios";

export default function ContactPage() {
	
	function handleContactSubmit(credentials) {
		
		let contact = new URLSearchParams();
		contact.append('objet', credentials.objet);
		contact.append('email', credentials.email);
		contact.append('message', credentials.message);
		contact.append('telephone', credentials.telephone);
		
		return (
			axios.post("http://cours/TestReact/mail.php", contact, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
		);
	}
	
	return <div className="col-md-6 m-auto">
		<div className="mt-3">
			<h1 className="text-center">Nous contacter</h1>
		</div>
		<Form className="mb-2"
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
					<Input placeholder="email" type="email" name="email" />
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
					<Input placeholder="objet" type="text" name="objet" />
				</InputGroup>
			</FormGroup>
			<FormGroup>
				<InputGroupAddon addonType="prepend" className={cssClasses.urMessage}>Votre Message</InputGroupAddon>
				<Input type="textarea" id="message" rows="10" name="message" />
			</FormGroup>
			<Button className="m-auto d-block">Submit</Button>
		</Form>
	</div>;
}