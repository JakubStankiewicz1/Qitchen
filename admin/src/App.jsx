import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservations from './pages/Reservations/Reservations';

const App = () => {
  return (
    <div className="app">
      <div className="appContainer">
        <Navbar className="appContainerNavbar" />
        <div className="appContainerContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;