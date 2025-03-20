
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './components/Navigation';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/Signup';
import Cart from "./Pages/Cart" 
import Logout from "./Pages/Logout" 
import Admin from "./Pages/AdminPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
<<<<<<< HEAD
        <Route path="/profile" element={<Profile />} />
=======
        <Route path="/admin" element={<Admin />} />
>>>>>>> 6bebf23b6b3a450719aeac46b06251371739830c
    </Routes>
      <Footer />
    </>
  );
};

export default App;