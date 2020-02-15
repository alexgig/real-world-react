import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = props => {
  return (
    <nav className="App-header">
      <NavLink to="/">{props.appName}</NavLink>
      <NavLink to="/test">Test Page</NavLink>
      <NavLink to="/test/24">Test id param Page</NavLink>
    </nav>
  )
}


export default Header