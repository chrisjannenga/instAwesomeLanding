import React from 'react'

import '../styles/NavBar.css'



class NavBar extends React.Component {

  render () {

    return (
      <div className='bottom-padding'>
        <div className='row no-padding no-margin blue-top-bg'>
          <div className='col s10 m3 l3 offset-s1'>
            <img src='https://i.imgur.com/HJHf2gc.png' alt='logo' height='100vh'/>
          </div>
          <div className='col s10 m3 l3 offset-s1  center'>
            <h6 className='white-text asap-font'>Process</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
