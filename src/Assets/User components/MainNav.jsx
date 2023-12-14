import React, { useEffect, useMemo, useState, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Logo from "../Media/logo.png";
import Footer from "./Footer";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

// later ill use seprate file for signout:

const MainNav = ({ userLogStatus }) => {
  const { pathname } = useLocation();
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  // State to manage the navigation panel toggle
  const [toggle, setToggle] = useState(false);
  // State to track the scroll position
  const [scrollPos, setScrollPos] = useState(0);

  // Reference to the navigation container for click outside detection
  const navRef = useRef(null);

  // Close the navigation panel when the route changes
  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  // Effect to handle scroll and click outside events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    // Function to handle click outside events
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    // Add event listeners for scroll and click outside
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the navigation panel visibility
  function toggler() {
    setToggle((prev) => !prev);
  }

  // Memoized object for dynamic styling based on toggle, scroll position, and screen size
  const toggleCondition = useMemo(() => {
    return {
      display: toggle ? "block" : "none",
      background: scrollPos > 50 || isSmallScreen ? "#f77f00" : "transparent",
    };
  }, [toggle, scrollPos, isSmallScreen]);

  // Styles for the navigation container
  const navStyles = {
    position: pathname !== "/" ? "static" : "sticky",
    height: pathname !== "/" ? "5rem" : "0",
  };

  // Styles for navigation link items
  const liStyles = {
    color: pathname !== "/" || scrollPos > 50 ? '#3f3400' : "",
  };

  function logOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      {/* Navigation container */}
      <nav style={navStyles} ref={navRef}>
        <div className="burger-container">
          <img
            src={Logo}
            alt="logo"
            className="mobile-logo"
            onClick={toggler}
          />
          <p className="logo-name">Delecious</p>
        </div>
        {/* Navigation links */}
        <ul className="navigation-ul" style={toggleCondition}>
          <NavLink to='/'>
            <li style={liStyles}>HOME</li>
          </NavLink>
      
          <NavLink to='reservation'>
            <li style={liStyles}>RESERVATION</li>
          </NavLink>
          <NavLink to='contact'>
            <li style={liStyles}>CONTACT</li>
          </NavLink>
          <NavLink to='about'>
            <li style={liStyles}>ABOUT</li>
          </NavLink>
          <NavLink to='admin'>
            <li style={liStyles}>ADMIN</li>
          </NavLink>

          {userLogStatus ? (
            <li>
              <ul>
                <li>user</li>
                <li onClick={logOut}>Log out</li>
              </ul>
            </li>
          ) : (
            <NavLink to="login">
              {" "}
              <li style={liStyles}>LOG IN</li>
            </NavLink>
          )}
        </ul>
      </nav>

      {/* Render nested routes */}
      <Outlet />
      {/* Render the Footer component */}
      <Footer />
    </>
  );
};

export default MainNav;
