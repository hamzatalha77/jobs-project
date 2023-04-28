import Wrapper from '../assets/wrappers/Navbar'
import { useState } from 'react'
import { FcHome } from 'react-icons/fc'
import Logo from './Logo'
import { FaAlignLeft,FaUserCircle } from 'react-icons/fa'
import { useContext } from 'react'
const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => console.log('hello there')}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => console.log('click this button')}
          >
          <FaUserCircle/></button>
        </div>
      </div>
    </Wrapper>
  )
}

export default NavBar
