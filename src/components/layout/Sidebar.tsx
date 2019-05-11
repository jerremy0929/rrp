import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="leftNavContainer">
      <NavLink
        activeClassName="activeNavLink"
        className="navLink"
        to="/"
        exact={true}
      >
        Home
      </NavLink>
      <NavLink activeClassName="activeNavLink" className="navLink" to="/prompt">
        Prompt
      </NavLink>
      <NavLink activeClassName="activeNavLink" className="navLink" to="/props">
        Props
      </NavLink>
    </div>
  )
}

export default Sidebar
