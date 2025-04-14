import React, { useState, createContext, useContext } from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservations from './pages/Reservations/Reservations';
import Login from './pages/Login/Login';

const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="app">
        <div className="appContainer">
          {isAuthenticated && <Navbar className="appContainerNavbar" />}
          <div className="appContainerContent">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/reservations"
                element={isAuthenticated ? <Reservations /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default App;