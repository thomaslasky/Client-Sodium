import React from 'react';
import CardPerso from '../components/CardPerso/CardPerso';


function QuiPage() {
	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-around">
					<div className="col-md-10 offset-md-1">
                    {/* pix={`${pic1}`} */}
						<CardPerso 	/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuiPage;