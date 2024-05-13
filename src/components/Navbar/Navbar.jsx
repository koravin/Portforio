// Import necessary dependencies
import { useState } from 'react';
import './Navbar.css';
import { IoListOutline } from 'react-icons/io5';
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-scroll';

const Navbar = () => {
  // Define state for menu visibility
  const [openMenu, setOpenMenu] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* Pass state and toggle function to MobileNav */}
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
      />
      {/* Navbar */}
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          {/* <img
            src='https://portfoliocollection.com/wp-content/uploads/2022/03/Untitled_design_35_-removebg-preview.png'
            alt=''
            className='logo'
          /> */}
          <h3 className='logo'>My portfolio</h3>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu-item'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='skill'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu-item'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='project'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu-item'
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu-item'
              >
                Contact Me
              </Link>
            </li>
            {/* <button
              className='contact-btn'
              onClick={() => {}}
            >
              Button
            </button> */}
          </ul>

          {/* Button to toggle menu */}
          {!openMenu && (
            <button
              className='menu-btn'
              onClick={toggleMenu}
            >
              <span style={{ fontSize: '1.8rem' }}>
                <IoListOutline style={{ fontSize: '1.8rem' }} />
              </span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
