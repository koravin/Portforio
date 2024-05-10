import { RxCross2 } from 'react-icons/rx';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className='mobile-menu-container'>
          <img
            src='https://portfoliocollection.com/wp-content/uploads/2022/03/Untitled_design_35_-removebg-preview.png'
            alt=''
            className='logo'
          />
          <ul>
            <li>
              <a
                href='#'
                className='menu-item'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='menu-item'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#'
                className='menu-item'
              >
                Project
              </a>
            </li>
            <li>
              <a
                href='#'
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
              <RxCross2 style={{ fontSize: '1.8rem' }} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
