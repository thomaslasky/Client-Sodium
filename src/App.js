import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return ( 
      <div className="App content">
        <Navbar />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
