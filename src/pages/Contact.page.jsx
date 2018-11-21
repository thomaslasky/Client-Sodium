import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


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