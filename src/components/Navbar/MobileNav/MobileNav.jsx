// import { RxCross2 } from 'react-icons/rx';
import './MobileNav.css';
import { Link } from 'react-scroll';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className='mobile-menu-container'>
          {/* <img
            src='https://portfoliocollection.com/wp-content/uploads/2022/03/Untitled_design_35_-removebg-preview.png'
            alt=''
            className='logo'
          /> */}
          <h3 className='logo-mobile'>My portfolio</h3>
          <hr className='line-space' />
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
            <li>
              <div
                onClick={toggleMenu}
                className='menu-item'
              >
                Closs
              </div>
            </li>
            {/* <button
              className='contact-btn'
              onClick={() => {}}
            >
              Button
            </button> */}
          </ul>
          {/* <div className='closs-btn'>
            <div onClick={toggleMenu}>closs</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
