import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import style from "./Layout.module.css";

const Layout = ({top, bottom, container}) => {
	return (
		<div className={`container-fluid p-0 ${style.masterContainer}`}>
			<div className={`${style.contentWrap}`}>
				<Row className="m-0">
					<Col className="p-0">{top}</Col>
				</Row>
				<Row className="m-0">
					<Col className="p-0">{container}</Col>
				</Row>
			</div>
			<Row className={`m-0 ${style.bottomRow}`}>
				<Col className="p-0">{bottom}</Col>
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