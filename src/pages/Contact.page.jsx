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

function ContactPage() {
	return <div className="col-md-6 m-auto">
		<div className="mt-3">
			<h1 className="text-center">Nous contacter</h1>
		</div>
		<Form className="mb-2">
			<FormGroup>
				<InputGroup>
					<InputGroupAddon addonType="prepend">@</InputGroupAddon>
					<Input placeholder="email" type="email" />
				</InputGroup>
			</FormGroup>
			<FormGroup>
				<InputGroup>
					<InputGroupAddon addonType="prepend">Téléphone</InputGroupAddon>
					<Input placeholder="téléphone" type="tel" />
				</InputGroup>
			</FormGroup>
			<FormGroup>
				<InputGroup>
					<InputGroupAddon addonType="prepend">Sujet</InputGroupAddon>
					<Input placeholder="sujet" type="text" />
				</InputGroup>
			</FormGroup>
			<FormGroup>
				<InputGroupAddon addonType="prepend" className={cssClasses.urMessage}>Votre Message</InputGroupAddon>
				<Input type="textarea" id="message" />
			</FormGroup>
			<Button className="m-auto d-block">Submit</Button>
		</Form>
	</div>;
}

export default ContactPage;