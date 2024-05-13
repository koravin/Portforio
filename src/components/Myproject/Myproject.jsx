// import React from 'react';
import './Myproject.css';

const Myproject = () => {
  return (
    <>
      <div className='project_container'>
        <h5 className='my_project_head'>Project-Portfolio</h5>
        <div className='card_container'>
          {/* card 01 */}
          <article className='card_article'>
            <img
              src='/images/00.png'
              alt=''
              className='card_img'
            />

            <div className='card_data'>
              {/* <span className='card_description'>Sacchan Kawaii</span> */}
              <h3 className='card_title'>Projecm-MGT-RMUTL</h3>
              <a
                href='http://128.199.147.134:3003/'
                className='card_button'
                target='_blank'
              >
                view
              </a>
            </div>
          </article>

          {/* card 02 */}
          <article className='card_article'>
            <img
              src='/images/01.png'
              alt=''
              className='card_img'
            />

            <div className='card_data'>
              {/* <span className='card_description'>Sacchan Kawaii</span> */}
              <h3 className='card_title'>Book Store</h3>
              <a
                href='http://13.212.11.103:3004/'
                className='card_button'
                target='_blank'
              >
                view
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Myproject;
