import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Simple Redux App</h1>
      <h4>
        <Link to="/places">Places</Link>
        {' | '}
        <Link to="/people">People</Link>
      </h4>
    </div>
  )
}

export default Header
