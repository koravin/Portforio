// import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, title }) => {
  return (
    <div className='contact-detail-card'>
      <div className='icon'>
        {/* <img
          src={iconUrl}
          alt={text}
        /> */}
        {iconUrl}
      </div>
      <p>
        {title}: {text}
      </p>
    </div>
  );
};

export default ContactInfoCard;
