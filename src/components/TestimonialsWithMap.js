import React, { Component } from 'react'

import '../styles/Testimonials.css'

class TestimonialsWMap extends React.Component {

  state = {
    renderedThings: [],
    itemsRendered: 0
  }

  render() {
    console.log(this)
    return (
      <div>{
        this.state.renderedThings.map((testimony, i) =>
          <div key={i}>{testimony.content}</div>
        )
      }</div>
    )
  }

  resetState = () => {
    this.setState({
      renderedThings: [],
      itemsRendered: 0,
    })
  }

  As a small nonprofit, working with Conscious was our first time ever contracting with an outside company to
  assist with our communications strategy, development, and planning. We really appreciated their patience and willingness to adapt
  to the unique needs of our organization, and we are very happy with the progress that we've made with the Conscious team!

  componentDidMount = () => {
    this.scheduleNextUpdate()
  }

  scheduleNextUpdate = () => {
      this.timer = setTimeout(this.updateRenderedThings, 5000)
  }


  updateRenderedThings = () => {
    const itemsRendered = this.state.itemsRendered
    const updatedState = {
      renderedThings: this.state.renderedThings.concat(this.props.testimonies[this.state.itemsRendered]),
      itemsRendered: itemsRendered + 1,
    }
    this.setState(updatedState)
      if (updatedState.itemsRendered < this.props.testimonies.length) {
        this.scheduleNextUpdate();

    } else {
      this.resetState();
      this.scheduleNextUpdate();
    }


    }

    componentWillUnmount = () => {
      clearTimeout(this.timer);
    }


}

export default TestimonialsWMap
