import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home.page";
import Contact from "./pages/Contact.page";

export default () => (
	<Router>
		<div>
			<Layout top={<Navbar />} bottom={<Footer />} container={
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/contact" exact component={Contact} />
				</div>
			}
			/>
		</div>
	</Router>
);