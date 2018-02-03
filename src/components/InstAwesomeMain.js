import React from 'react'

import '../styles/InstAwesomeMain.css'

class InstAwesomeMain extends React.Component {
  render () {
    return (
      <div className='blue-top-bg no-padding no-margin'>
        <div className='row no-padding no-margin  center'>
          <div className='asap-font '><h2 className='white-text flow-text no-margin'>InstAWESOME</h2></div>
        </div>
        <div className='row center'>
          <div className='asap-font'><h4 className='white-text flow-text'>A better way to game your 'gram</h4></div>
        </div>
        <div className=' center no-padding no-margin'>
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
