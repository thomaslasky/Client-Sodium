import React from 'react';
import CardInfo from '../components/CardInfo/CardInfo';
import pic1 from "../assets/Images/Background/4.png";
import Carousel from "../components/Carousel/Carousel";

function IndexPage() {
	return (
		<div>
			<div className="p-0">
				<Carousel />
			</div>
			<div className="container-fluid">
				<div className="row justify-content-around">
					<div className="col-md-6 p-0">
						<CardInfo backgroundCard={`${pic1}`}
						          titleCard="Titre TEST"
						          link="https://test.fr"
						          linkName="Exemple"
						/>
					</div>
					<div className="col-md-6 p-0">
						<CardInfo backgroundCard={`${pic1}`}
						          titleCard="Titre TEST"
						          link="https://test.fr"
						          linkName="Exemple"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndexPage;
