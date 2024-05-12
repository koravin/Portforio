import React from 'react';
import './SkillsinfoCard.css';

const SkillsinfoCard = ({ heading, skills }) => {
  //   console.log('skills', skills);
  return (
    <div className='skill-info-card'>
      <h6>{heading}</h6>

      <div className='skills-info-content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className='skill-info'>
              <p>{item.skill}</p>
            </div>
            <hr className='line-space' />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsinfoCard;
