import './App.css';

// component import
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Myproject from './components/Myproject/Myproject';
import ContactMe from './components/Contactme/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div id='home'>
          <Home />
        </div>
        <div id='skill'>
          <Skills />
        </div>
        <div id='project'>
          <Myproject />
        </div>
        <div id='contact'>
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
