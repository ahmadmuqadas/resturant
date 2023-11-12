import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../Media/logo.png'

const MainNav = () => {
  return (
    <>
    <nav>
        <ul>
            <li><img src={Logo} alt="logo" className='logo' /></li>
            <li>HOME</li>
            <li>ORDER NOW</li>
            <li>RESERVATION</li>
            <li>MENU</li>
            <li>FEEDBACK</li>
            <li>CONTACT</li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default MainNav