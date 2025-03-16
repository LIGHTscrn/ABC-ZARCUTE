import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './index.css';
import Livestream from './components/Livestream';
import Mediaproduction from './components/Mediaproduction';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/About-us/Aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path='/livestream' element={<Livestream/>}/>
        <Route path='/media_production' element={<Mediaproduction/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
