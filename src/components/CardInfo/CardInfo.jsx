import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from  "./CardInfo.module.css";

export default function CardInfo({ background }){
	return (
		<div className={`${cssClasses.card} m-2`} style={{
			backgroundImage: `url(${background})`
		}}>
		
		</div>
	);
}
CardInfo.propTypes = {
	background: PropTypes.string.isRequired
};