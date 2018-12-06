import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home.page";
import Contact from "./pages/Contact.page";
import Who from "./pages/Qui.page";

import Gallery from "./pages/Gallery.page";
import Preorder from "./pages/Preorder.page";
import Techno from "./pages/Techno.page";

import Page404 from "./pages/Page404.page";
import Tarif from "./pages/Tarif.page";

import { getRequest } from "../src/api/Api.manager";
import axios from "axios";

export default class RouterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: null
    };
  }

  componentDidMount() {
    // getRequest("http://localhost:8000/text/FR").then(res => {
    //   this.setState({ texts: res.data.texts });
    // });
    axios.get("http://localhost:8000/text/FR").then(res => {
      this.setState({ texts: res.data.texts });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Layout
            top={<Navbar />}
            bottom={<Footer />}
            container={
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Home texts={this.state.texts} />}
                />
                <Route path="/contact" exact component={Contact} />
                <Route
                  path="/who-are-we"
                  exact
                  render={() => <Who texts={this.state.texts} />}
                />
                <Route path="/Gallery" exact component={Gallery} />
                <Route path="/preorder" exact component={Preorder} />
                <Route path="/tarif" exact component={Tarif} />
                <Route
                  path="/technology"
                  exact
                  render={() => <Techno texts={this.state.texts} />}
                />
                <Route path="*" component={Page404} />
              </Switch>
            }
          />
        </div>
      </Router>
    );
  }
}
