import React from 'react';
import Menu from './Menu'
import Logo from '../../imagens/RocketChat.png'
import './styles.css'

function Nav () {
  return (
    <nav className='navbar'>
    <div>
           <img
          className='navbar-logo'
          src={Logo}
          alt='Logotipo do RocketChat'
        />
    </div>
    <Menu />
  </nav>
  )
}

export default Nav