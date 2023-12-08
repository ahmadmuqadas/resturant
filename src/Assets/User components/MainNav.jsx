import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from '../Media/logo.png'
import Footer from './Footer';








const MainNav = () => {

  const {pathname} = useLocation();



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

const toggleCondition = useMemo(() => {
  return {
    display: toggle ? 'block' : 'none',
    background: scrollPos > 50 || isSmallScreen === true ? ' #f77f00' : 'transparent',
   
    
  

  };
}, [toggle, scrollPos, isSmallScreen]);

const navStyles = {
  position: pathname !== '/' ? 'static' : 'sticky',
  height: pathname !== '/' ? '5rem' : '0',
}

const liStyles = {
  color: pathname !== '/' ? 'black' : '',
}
  return (
    <>
    <nav style={navStyles} >
<div className="burger-container">
<img src={Logo} alt="logo" className='mobile-logo' onClick={toggler} />
      <p className='logo-name'>Delecious</p>
</div>
        <ul className='navigation-ul' style={toggleCondition}>
        
           <NavLink><li style={liStyles}>HOME</li></NavLink>
           <NavLink><li style={liStyles}>ORDER NOW</li></NavLink>
           <NavLink><li style={liStyles}>RESERVATION</li></NavLink>
           <NavLink><li style={liStyles}>MENU</li></NavLink>
           <NavLink><li style={liStyles}>FEEDBACK</li></NavLink>
           <NavLink><li style={liStyles}>CONTACT</li></NavLink>
           <NavLink to='login'><li style={liStyles}>LOG IN</li></NavLink>
        </ul>
    </nav>

    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default MainNav
