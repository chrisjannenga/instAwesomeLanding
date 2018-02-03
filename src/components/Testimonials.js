import React, { Component } from 'react';
import '../styles/Testimonials.css'

class Testimonials extends Component {

  render () {

  var text = ["Welcome", "Hi", "Sup dude"];
  var counter = 0;
  var currentT= document.getElementById("changeText");
  setInterval(change, 1000);

  function change() {
   currentT = text[counter];
   counter++;
   if (counter >= text.length) {
     counter = 0;
   }
  }

    return (
      <div className='testimony'>
        <div className='currentT'>
          <p onLoad={ setInterval(change, 1000)} ref="changeText" >
          </p>
        </div>
      </div>
    )
  }
}

export default Testimonials;
