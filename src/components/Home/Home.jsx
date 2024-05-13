// import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className='home-container'>
        <div className='home-content'>
          <h2>Hi👋👋 I'm Koravin Innanchai</h2>
          <p>
            I am a recent graduate in Computer Engineering, characterized by strong responsibility and an insatiable appetite for
            learning.I am committed to contributing my efforts and leveraging my talents to propel your company towards success.
            Let's collaborate and innovate!
          </p>
          <div className='Resume_download'>
            <a
              href='resume/Resume.pdf'
              download='Resume.pdf'
            >
              <button className='resume-button'>Download Resume</button>
            </a>
          </div>
        </div>

        <div className='home-img'>
          {/* react-icon + profile */}
          <div>
            {/* <div className='tech-icon'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
              alt=''
            />
          </div> */}
            {/* profile */}
            <img
              src='https://media.tenor.com/dO6hel_Lzc8AAAAC/pixelart-persona.gif'
              alt=''
              className='image_profile'
            />
          </div>
          {/* Html5-Javasc-Css-icon  */}
          <div>
            {/* Html */}
            <div className='tech-icon'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/732/732212.png'
                alt=''
              />
            </div>
            {/* css */}
            <div className='tech-icon'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                alt=''
              />
            </div>
            {/* JavaSc */}
            <div className='tech-icon'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
                alt=''
              />
            </div>

            <div className='tech-icon'>
              <img
                src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
