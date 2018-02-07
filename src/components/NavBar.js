import React from 'react'
import {Navbar,  NavItem} from 'react-materialize'

import '../styles/NavBar.css'



class NavBar extends React.Component {

  render () {

    return (
      <div className='navBar-fixed'>
        <Navbar fixed right options={{closeOnClick: true}}  className='navBar navBar-fixed'>
          <NavItem>
            <span className='navText'>Home</span>
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
