import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define the animation using react-spring
  const navAnimation = useSpring({
    height: isScrolled ? '60px' : '120px',
    config: {
      tension: 280, // Adjust the tension for a smoother animation
      friction: 26, // Adjust the friction for a smoother animation
    },
  });

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <animated.nav style={navAnimation} className={isScrolled ? 'app_navbar scrolled' : 'app_navbar'}>
      <div className="app_navbar-logo">
        <h1 className={isScrolled ? 'logo-text smaller' : 'logo-text'}>Your Logo</h1>
      </div>
      <ul className="app_navbar-links">
        <li className="p__avenirnext"><a href="#home">Home</a></li>
        <li className="p__avenirnext"><a href="#about">About</a></li>
        <li className="p__avenirnext"><a href="#menu">Menu</a></li>
        <li className="p__avenirnext"><a href="#contact">Contact</a></li>
      </ul>
      <div className='app_navbar-reservation'>
        <a href="/" className='p__avenirnext'>Book Table</a>
        <div />
        <a href="/" className='p__avenirnext'>Order Online</a>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)} />
          <ul className="app_navbar-smallscreen-links">
            <li className="p__avenirnext"><a href="#home">Home</a></li>
            <li className="p__avenirnext"><a href="#about">About</a></li>
            <li className="p__avenirnext"><a href="#menu">Menu</a></li>
            <li className="p__avenirnext"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}
      </div>
    </animated.nav>
  );
};

export default Navbar;