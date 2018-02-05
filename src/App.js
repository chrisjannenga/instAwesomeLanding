import React, { Component } from 'react';


import InstAwesomeMain from './components/InstAwesomeMain'
import InstAwesomeVideo from './components/InstAwesomeVideo'
import CuriousGraphic from './components/CuriousGraphic'
import InstAwesomeProcess from './components/InstAwesomeProcess'
import InspiredBar from './components/InspiredBar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <InstAwesomeMain />
        <InstAwesomeVideo />
        <CuriousGraphic />
        <InstAwesomeProcess />
        <InspiredBar />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
