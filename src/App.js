import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import CardInfo from "./components/CardInfo/CardInfo";
import pic1 from "./assets/Images/Background/4.png";
import pic2 from "./assets/Images/Background/5.png";

class App extends Component {
	render() {
		return (
			<div className="App content">
				<Navbar />
				<Carousel />
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 p-0">
							<CardInfo background={`${pic1}`} />
						</div>
						<div className="col-md-6 p-0">
							<CardInfo background={`${pic2}`} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
