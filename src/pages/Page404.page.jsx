import React from 'react';
import Img from 'react-image';

import pic404 from '../assets/Images/Background/404notfound.jpg';

//import cssModule from 'Page404.module.css';

function notFound() {
	return (
		<div>
			<div>
				<div className="w-100">
					<Img class="img-fluid" src={pic404} />
				</div>
			</div>
		</div>
	);
}

export default notFound;