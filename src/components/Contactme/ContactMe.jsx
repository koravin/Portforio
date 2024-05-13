// component import
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';

// import React from 'react';
import './ContactMe.css';

// icon import
import { FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { BiMessageRounded } from 'react-icons/bi';

const ContactMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>
      <div className='contact-content'>
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl=<CgMail className='Contact-logo' />
            title='gmail'
            text='koravininnanchaicc@gmail.com'
          />
          <ContactInfoCard
            iconUrl=<FaGithub className='Contact-logo' />
            title='github'
            text='https://github.com/koravin'
          />
        </div>

        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl=<MdOutlineLocalPhone className='Contact-logo' />
            title='Phone'
            text='0882696552'
          />
          <ContactInfoCard
            iconUrl=<BiMessageRounded className='Contact-logo' />
            title='Messager'
            text='Koravin Innanchai'
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
