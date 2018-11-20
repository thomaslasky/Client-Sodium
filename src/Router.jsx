import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home.page";

export default () => (
	<Router>
		<div>
			<Layout top={<Navbar />} bottom={<Footer />} container={
				<Route path="/" exact component={Home} />
			}
			/>
		</div>
	</Router>
);