import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
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
           <NavLink><li>HOME</li></NavLink>
           <NavLink><li>ORDER NOW</li></NavLink>
           <NavLink><li>RESERVATION</li></NavLink>
           <NavLink><li>MENU</li></NavLink>
           <NavLink><li>FEEDBACK</li></NavLink>
           <NavLink><li>CONTACT</li></NavLink>
           <NavLink to='login'><li>LOG IN</li></NavLink>
        </ul>
    </nav>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainNav
