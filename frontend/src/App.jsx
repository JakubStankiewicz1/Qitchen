import React from 'react';
import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Reservation from './pages/Reservation/Reservation';
import Confirmation from './pages/Confirmation/Confirmation';
import BlogPost from './pages/BlogPost/BlogPost';
import UpdateReservation from './pages/UpdateReservation/UpdateReservation';
import DeleteReservation from './pages/DeleteReservation/DeleteReservation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/update-reservation/:id" element={<UpdateReservation />} />
        <Route path="/delete-reservation/:id" element={<DeleteReservation />} />
      </Routes>
      
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default App;