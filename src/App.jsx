import './App.css';

// component import
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
      </div>
      <div className='container'>
        <Skills />
      </div>
    </>
  );
}

export default App;
