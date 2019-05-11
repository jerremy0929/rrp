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
    </div>
  )
}

export default Sidebar
