import React, { Component } from 'react';
import '../styles/Testimonials.css'


class Testimonials extends Component {


  state = {
    counter: 0,
    currentT: []
  }

  text = ["Welcome", "Hi", "Sup dude"];
  currentT = [];
  counter = 0;

  change = () => {
    this.currentT = this.text[this.counter];
    console.log(this.currentT);
    this.setState({
      counter: this.counter,
      currentT: this.currentT
    })
    this.counter++;
    if (this.counter >= this.text.length) {
      this.counter = 0;
    }
  }


  render () {

    console.log(this.state);

    setTimeout(this.change, 5000)

    return (
      <div className='testimony'>
        <div className='currentT'>
          <p>{this.state.currentT}</p>
        </div>
      </div>
    )
  }
}

export default Testimonials;
