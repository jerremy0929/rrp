import React from 'react'
import { Image } from 'react-bootstrap'
import rpw from '../../assets/Retro_Pluralsight_White.png'

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <Image src={rpw} className="header-logo" />
      </a>

      <div className="header-text">React Router 4</div>
    </header>
  )
}

export default Header
