import './Logo.scss'

import LogoIcon from '../../assets/logo/github.svg'
import React from 'react'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={LogoIcon} alt='logo' />
    </div>
  )
}

export default Logo
