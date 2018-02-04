import React from 'react'

import '../styles/NavBar.css'



class NavBar extends React.Component {

  render () {

    return (
      <div>
        <div className='row no-padding no-margin blue-top-bg'>
          <div className='col s10 m4 l4 offset-s1'>
            <img src='https://i.imgur.com/HJHf2gc.png' alt='logo' height='100px'/>
            
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
