import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from "./CardInfo.module.css";

export default function CardInfo({backgroundCard, titleCard, link, linkName}) {
	return (
		<div className={`${cssClasses.card} m-2`} style={{
			backgroundImage: `url(${backgroundCard})`
		}}>
			<div>
				<h1 className={`${cssClasses.containCardh1}`}>{`${titleCard}`}</h1>
				<p className={`${cssClasses.containCardp} col-md-10 m-auto`}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<a className={`${cssClasses.containCarda}`} href={`${link}`} target="_blank">{`${linkName}`}</a>
			</div>
		</div>
	);
}
CardInfo.propTypes = {
	background: PropTypes.string.isRequired,
	title     : PropTypes.string.isRequired,
	link      : PropTypes.string.isRequired,
	linkName  : PropTypes.string.isRequired
};