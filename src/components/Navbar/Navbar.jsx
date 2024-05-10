import { useState } from 'react';
import './Navbar.css';
import { IoListOutline } from 'react-icons/io5';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log('openMenu', openMenu);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
      />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img
            src='https://portfoliocollection.com/wp-content/uploads/2022/03/Untitled_design_35_-removebg-preview.png'
            alt=''
            className='logo'
          />
          <ul className='jongrai'>
            <li>
              <a
                href=''
                className='menu-item'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=''
                className='menu-item'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href=''
                className='menu-item'
              >
                Project
              </a>
            </li>
            <li>
              <a
                href=''
                className='menu-item'
              >
                Contact Me
              </a>
            </li>
            <button
              className='contact-btn'
              onClick={() => {}}
            >
              Button
            </button>
          </ul>

          <button
            className='menu-btn'
            onClick={toggleMenu}
          >
            <span style={{ fontSize: '1.8rem' }}>
              <IoListOutline style={{ fontSize: '1.8rem' }} />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
