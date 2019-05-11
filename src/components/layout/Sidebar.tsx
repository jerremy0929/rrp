import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="leftNavContainer">
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/prompt">
        Prompt
      </Link>
      <Link className="navLink" to="/props">
        Props
      </Link>
    </div>
  )
}

export default Sidebar
