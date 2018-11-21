import React from 'react';
import InputGroupAddon from "reactstrap/src/InputGroupAddon";
import Input from "reactstrap/src/Input";
import InputGroup from "reactstrap/src/InputGroup";

function ContactPage() {
	return (
		<div>
			<InputGroup>
				<InputGroupAddon addonType="prepend">@</InputGroupAddon>
				<Input placeholder="email" />
			</InputGroup>
		</div>
	);
}

export default ContactPage;