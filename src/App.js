import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import CardInfo from "./components/CardInfo/CardInfo";

class App extends Component {
	render() {
		return (
			<div className="App content">
				<Navbar />
				<Carousel />
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 p-0">
							<CardInfo background=""/>
						</div>
						<div className="col-md-6 p-0">
							<CardInfo background=""/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
