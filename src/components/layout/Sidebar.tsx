import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Home', url: '/', exact: true },
  { name: 'Color', url: '/color', exact: false },
  { name: 'Prompt', url: '/prompt', exact: false },
  { name: 'Props', url: '/props', exact: false },
  { name: 'Logging', url: '/logging', exact: false },
  { name: 'Private', url: '/private', exact: false },
  { name: '404 Error', url: '/foo', exact: false },
]

const Sidebar = () => {
  return (
    <div className="leftNavContainer">
      <ul>
        {links.map((link, idx) => (
          <li className="nav" key={idx}>
            <NavLink
              activeClassName="activeNavLink"
              className="navLink"
              to={link.url}
              exact={link.exact}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
