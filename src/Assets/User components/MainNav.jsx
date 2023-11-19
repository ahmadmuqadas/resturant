import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../Media/logo.png'
import Footer from './Footer';


const MainNav = () => {


  const [toggle, setToggle] = useState(false);


function toggler() {
setToggle((prev) => {
return !prev
})
}

const toggleCondition = {
  display: toggle ? 'block' : 'none'
}




  return (
    <>
    <nav>
<div className="burger-container">
<img src={Logo} alt="logo" className='mobile-logo' onClick={toggler} />
      <p className='logo-name'>Delecious</p>
</div>
        <ul className='navigation-ul' style={toggleCondition}>
            {/* <li><img src={Logo} alt="logo" className='logo' /></li> */}
            <li>HOME</li>
            <li>ORDER NOW</li>
            <li>RESERVATION</li>
            <li>MENU</li>
            <li>FEEDBACK</li>
            <li>CONTACT</li>
            <li>LOG IN</li>
        </ul>
    </nav>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainNav
