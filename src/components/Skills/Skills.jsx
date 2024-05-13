import { useState } from 'react';
import './Skills.css';

// component import
import SkillCard from './SkillCard/SkillCard';
import SkillsinfoCard from './SkillsinfoCard/SkillsinfoCard';

// data import
import { data } from '../../utils/data';

console.log('data', data);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(data[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container'>
      <div>
        <h5 className='header_skills'>Technical Proficiency</h5>
        <div className='skill-content'>
          <div className='skills'>
            {data.map((item) => {
              return (
                <SkillCard
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title === item.title}
                  onClick={() => handleSelectSkill(item)}
                />
              );
            })}
          </div>

          <div className='skill-info'>
            <SkillsinfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
