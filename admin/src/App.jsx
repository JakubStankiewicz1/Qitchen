import React, { useState, useEffect, createContext, useContext } from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservations from './pages/Reservations/Reservations';
import Login from './pages/Login/Login';

const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Automatically log in if a token exists
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    setIsAuthenticated(false); // Update authentication state
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      <div className="app">
        <div className="appContainer">
          {isAuthenticated && <Navbar className="appContainerNavbar" />}
          <div className={`appContainerContent ${!isAuthenticated ? 'fullWidth' : ''}`}>
            <Routes>
              <Route
                path="/login"
                element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/"
                element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/reservations"
                element={isAuthenticated ? <Reservations /> : <Navigate to="/login" />}
              />
              <Route
                path="*"
                element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
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