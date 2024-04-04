import './App.css'
import Top from './assets/images/header.png'

import React from 'react'

export const Header = () => {
  return (
    <div className='Header'>
        <img src={Top} />
    </div>
  )
}

export default Header;