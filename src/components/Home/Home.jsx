// import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className='home-container'>
      <div className='home-content'>
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore reiciendis rem dicta vitae repellat maiores. Et
          doloremque dignissimos fuga tenetur culpa officiis, ducimus perferendis, ullam placeat praesentium, accusantium
        </p>
      </div>

      <div className='home-img'>
        {/* react-icon + profile */}
        <div>
          <div className='tech-icon'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
              alt=''
            />
          </div>
          {/* profile */}
          <img
            src='https://i.redd.it/xcsd2xaey5ob1.jpg'
            alt=''
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
        </div>
      </div>
    </section>
  );
};

export default Home;
