import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './index.css';
import Livestream from './components/Livestream';
import Mediaproduction from './components/Mediaproduction';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/About-us/Aboutus';
import Esport from './components/Esports';
import Support from './components/Support/Support';

function App() {
  const [currentMode, setCurrentMode] = useState('light');

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = currentMode;
  }, [currentMode]);

  return (
    <Router>
      <div className={currentMode}>
        <Routes>
          <Route path="/" element={<Homepage currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path="/home" element={<Homepage currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path='/livestream' element={<Livestream currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path='/media_production' element={<Mediaproduction currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path='/register' element={<Register currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path='/about-us' element={<AboutUs currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path='/esports' element={<Esport currentMode={currentMode} toggleMode={toggleMode} />} />
          <Route path='/support' element={<Support currentMode={currentMode} toggleMode={toggleMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
