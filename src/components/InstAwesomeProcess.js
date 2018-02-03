import React from 'react'

import '../styles/InstAwesomeProcess.css'

class InstAwesomeProcess extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row center'>
          <div className='col s8 m3 l3 offset-s2'>
            <h5 className='asap-text conscious-text flow-text'><i class="fas fa-long-arrow-alt-right"></i> We start by getting familiar with your brand.</h5>
          </div>
          <div className='col s8 m3 l3 offset-s2'>
            <h5 className='asap-text conscious-text flow-text'><i class="fas fa-long-arrow-alt-right"></i> Next, we show you the Insta-ropes.</h5>
          </div>
          <div className='col s8 m3 l3 offset-s2'>
            <h5 className='asap-text conscious-text flow-text'><i class="fas fa-long-arrow-alt-right"></i> After that, it’s time to sink our teeth into strategy.</h5>
          </div>
          <div className='col s8 m3 l3 offset-s2'>
            <h5 className='asap-text conscious-text flow-text'><i class="fas fa-long-arrow-alt-right"></i> Finally, we walk you through it together—once.</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default InstAwesomeProcess
