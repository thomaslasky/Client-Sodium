import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';

const Layout = ({top, bottom, container}) => {
	return (
		<div className="container-fluid p-0">
			<Row className="mr-0 ml-0">
				<Col className="pl-0 pr-0">{top}</Col>
			</Row>
			<Row className="mr-0 ml-0">
				<Col className="pl-0 pr-0">{container}</Col>
			</Row>
			<Row className="mr-0 ml-0">
				<Col className="pl-0 pr-0">{bottom}</Col>
			</Row>
		</div>
	);
};

Layout.propTypes = {
	top      : PropTypes.any.isRequired,
	container: PropTypes.any.isRequired,
	bottom   : PropTypes.any.isRequired
};

export default Layout;