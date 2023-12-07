import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../Media/logo.png'
import Footer from './Footer';





const MainNav = () => {


  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
 

  const [toggle, setToggle] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //


function toggler() {
setToggle((prev) => {
return !prev
})
}

const toggleCondition = {
  display: toggle ? 'block' : 'none',
  background: scrollPos > 50 || isSmallScreen === true ? ' #f77f00' : 'transparent',
}


const conditionalStyles = {
  


}



  return (
    <>
    <nav >
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
