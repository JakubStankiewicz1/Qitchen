import React from 'react';
import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App