import React from 'react'
import '../styles/NavBar.css'

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="sass.html">Process</a></li>
            <li><a href="badges.html">Ventures</a></li>
            <li><a href="collapsible.html">Community</a></li>
            <li><button>START</button></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
