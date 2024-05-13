// icon import
import { TiDeviceLaptop } from 'react-icons/ti';
import { FaServer } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export const data = [
  {
    title: 'Frontend',
    icon: <TiDeviceLaptop className='skill-icon-img' />,
    skills: [{ skill: 'HTML5' }, { skill: 'CSS3' }, { skill: 'JavaScript' }, { skill: 'React.js' }],
  },
  {
    title: 'Backend',
    icon: <FaServer className='skill-icon-img' />,
    skills: [{ skill: 'Node.js' }, { skill: 'Express.js' }, { skill: 'golang' }],
  },
  {
    title: 'Tools',
    icon: <FaTools className='skill-icon-img' />,
    skills: [{ skill: 'github' }, { skill: 'Visual Studio Code' }, { skill: 'Postman' }, { skill: 'Moqups' }, { skill: 'Figma' }],
  },
  {
    title: 'Soft Skills',
    icon: <FaGlobe className='skill-icon-img' />,
    skills: [
      { skill: 'Problem solving' },
      { skill: 'Teamwork' },
      { skill: 'Communication' },
      { skill: 'Collaboration' },
      { skill: 'Responsibility' },
    ],
  },
];
