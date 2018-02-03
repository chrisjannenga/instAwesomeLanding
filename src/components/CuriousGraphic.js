import React from 'react'

import '../styles/CuriousGraphic.css'

class CuriousGraphic extends React.Component {
  render () {
    return (
      <div className='water-graphic darkoverlay center'>
        <div className='row no-margin'>
          <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3 '>
            <h4 className='asap-font white-text top-padding flow-text'>Curious about our process?</h4>
          </div>
            <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3 '>
              <h5 className='asap-font white-text top-padding flow-text'>“If you can’t describe what you are doing as a process, you don’t know what you’re doing.”</h5>
            </div>
            <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3 '>
              <h5 className='asap-font white-text top-padding bottom-padding flow-text'>– W. Edwards Deming</h5>
            </div>
          </div>
        </div>
    )
  }
}

export default CuriousGraphic
