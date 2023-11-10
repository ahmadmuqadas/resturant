import React from 'react'
import { Outlet } from 'react-router-dom'


const MainNav = () => {
  return (
    <>
    <nav>
        <ul>
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