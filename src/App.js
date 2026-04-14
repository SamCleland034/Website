import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaRobot, FaCode, FaChartLine } from 'react-icons/fa';
import { Route, Routes, Link } from 'react-router-dom';
import Projects from './projects.js';
import profilePic from './me.jpeg'; // with import



function App() {
  return (
    <div className="App">
      {/* Updated Navbar with Buttons and Social Links */}
      <nav className="navbar">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/projects" className="home-button">Projects</Link>

        <div className="social-links">
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
          path="/"
          element={
            <div className="home-container">
              <section className="hero-container">
                <div className="hero">
                  <h1>Sam Cleland</h1>
                  <img src={profilePic} alt="SC" className="profile-image" />
                  <p className="tagline">Fordham MBA Student | Data Analytics | McGill Comp Eng Grad</p>
                  <p className="intro">I’m a current MBA student with a background in Computer Engineering. Currently looking for Full Time Opportunities in the NY Metropolitan Area!</p>
                  <a
                    href={process.env.PUBLIC_URL + "/Sam_Cleland_AI.pdf"}
                    download
                    className="download-btn"
                  >
                    <FaDownload /> Download Resume
                  </a>
                </div>
              </section>

              <div className="resume-content">
                <section className="resume-section">
                  <h2 className="section-title">Interests</h2>
                  <div className="interests-grid">
                    <div className="interest-card">
                      <FaRobot className="interest-icon" />
                      <h3>Artificial Intelligence</h3>
                      <p>Deeply interested in LLMs, RAG systems, and the intersection of AI with real-world applications. Currently serving as VP of Tech & Research at the Fordham GSB AI Society, exploring how generative AI is reshaping industries.</p>
                    </div>
                    <div className="interest-card">
                      <FaCode className="interest-icon" />
                      <h3>Software Development</h3>
                      <p>Passionate about building full-stack applications from the ground up. Enjoy working across the stack — from Python backends and data pipelines to React and Next.js frontends.</p>
                    </div>
                    <div className="interest-card">
                      <FaChartLine className="interest-icon" />
                      <h3>FinTech & Data Analytics</h3>
                      <p>Pursuing an MBA in Financial Technology with a focus on applying machine learning and data analytics to finance. Interested in algorithmic trading, risk modeling, and data-driven decision making.</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-links">
            <a href="mailto:esc11@fordham.edu" className="footer-link">
              <FaEnvelope /> esc11@fordham.edu
            </a>
            <a href="https://linkedin.com/in/samcleland34" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/SamCleland034" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub /> GitHub
            </a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Sam Cleland</p>
        </div>
      </footer>
    </div>
  );
}

export default App;