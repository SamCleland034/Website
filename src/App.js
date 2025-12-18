import React from 'react';
import './App.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Route, Routes, Link } from 'react-router-dom';
import Projects from './projects.js';
import profilePic from './me.jpeg'; // with import



function App() {
  return (
  <div
    className="App"
    style={{
      height: "100vh",
      overflowY: "auto",
      WebkitOverflowScrolling: "touch"
    }}
  >
        {/* Updated Navbar with Buttons and Social Links */}
        <nav className="navbar">
          <Link to="/" className="home-button">Home</Link>
          <Link to="/projects.js" className="home-button">Projects</Link>
  
          <div className="social-links">
            <a href="https://x.com/samcleland6" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/samcleland34" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/SamCleland034" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </nav>
      <Routes>
        <Route
          path="*"
          element={
            <div className="content-overlay">
            <header className="hero">
              <h1>Sam Cleland</h1>
              <img src={profilePic} alt="SC" className="profile-image"/>
              <p className="tagline">Fordham MBA Student | Data Analytics | McGill Comp Eng Grad</p>
              <p className="intro">I’m a current MBA student with a background in Computer Engineering. Currently looking for Full Time Opportunities!</p>
     
            </header>
            </div>
          }
        />
        <Route path="/projects.js" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;