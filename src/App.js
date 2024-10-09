import './App.scss';
import {Routes, Route} from 'react-router-dom'
// import Particles from "react-tsparticles";
// import { loadFull } from 'tsparticles';
import React from "react";
import Projects from './containers/projects';
import Contact from './containers/contact';
import Home from './containers/home';
import Skills from './containers/skills';
import About from './containers/about';
import Resume from './containers/resume';
import Navbar from './components/navBar';

function App() {

  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <div className='App_main-page-content'>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </div>
      
    </div>
  );
}

export default App;
