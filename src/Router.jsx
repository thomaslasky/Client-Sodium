import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

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

import { getRequest } from "../src/api/Api.manager";
import Api from "./api/Api.view";

class RouterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      currentLanguage: ""
    };

    this.onCurrentLangChange = this.onCurrentLangChange.bind(this);
  }

  onCurrentLangChange(lang) {
    this.setState({ currentLanguage: lang });
  }

  componentDidMount() {
    axios.get("http://localhost:8000/image").then(res => {
      this.setState({ images: res.data.images });
    });
  }

  render() {
    const { currentLang } = this.props;
    return (
      <Router>
        <div>
          <Layout
            top={<Navbar onCurrentLangChange={this.onCurrentLangChange} />}
            bottom={<Footer />}
            container={
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Home images={this.state.images} />}
                />
                <Route path="/contact" exact component={Contact} />
                <Route
                  path="/who-are-we"
                  exact
                  render={() => <Who images={this.state.images} />}
                />
                <Route
                  path="/Gallery"
                  exact
                  render={() => (
                    <Gallery
                      images={
                        this.state.images
                          ? this.state.images.galleryImages
                          : null
                      }
                    />
                  )}
                />
                <Route
                  path="/preorder"
                  exact
                  render={() => (
                    <Api
                      req={() =>
                        getRequest(
                          `http://localhost:8000/custompart/${currentLang}`
                        )
                      }
                      renderSuccess={res => (
                        <Preorder customParts={res.data.customParts} />
                      )}
                    />
                  )}
                />
                <Route
                  path="/technology"
                  exact
                  render={() => <Techno images={this.state.images} />}
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

export default RouterApp;
