import React from 'react'

import '../styles/InstAwesomeMain.css'

class InstAwesomeMain extends React.Component {
  render () {
    return (
      <div>
        <div className='row blue-top-bg center'>
          <div className='asap-font'><h1 className='white-text'>InstAWESOME</h1></div>
        </div>
        <div className='blue-top-bg center no-padding no-margin'>
          <div className=''>
        <img className='no-margin iphone-graphic' src="https://i.imgur.com/Mi0V17b.gif" title="instalytics" height='400px' width='auto'/>
      </div>
        <div className='instagradient no-padding no-margin'></div>
        </div>
      </div>
    );
  }
}

export default InstAwesomeMain
