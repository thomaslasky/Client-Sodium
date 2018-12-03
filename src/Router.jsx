import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home.page";
import Contact from "./pages/Contact.page";
import Who from "./pages/Qui.page";
import Page404 from "./pages/Page404.page";

export default () => (
  <Router>
    <div>
      <Layout
        top={<Navbar />}
        bottom={<Footer />}
        container={
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/who-are-we" exact component={Who} />
            <Route path="*" component={Page404} />
          </Switch>
        }
      />
    </div>
  </Router>
);
