import { useState } from 'react';
import './App.css';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaRobot,
  FaCode,
  FaChartLine,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Projects from './projects.js';
import profilePic from './me.jpeg';
import { Reveal } from './Reveal.js';
import { useTheme } from './useTheme.js';

const skillGroups = [
  { key: 'languages', label: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'] },
  { key: 'frameworks', label: 'Frameworks & Tools', skills: ['React', 'Next.js', 'Node.js', 'Vercel', 'Google Cloud'] },
  { key: 'ai-ml', label: 'AI / ML', skills: ['TensorFlow', 'RAG Systems', 'GPT-4o', 'Gemini', 'LangChain'] },
];

function Navbar() {
  const location = useLocation();
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = path => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
        Sam Cleland
      </Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className={`home-button ${isActive('/') ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`home-button ${isActive('/projects') ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
      </div>

      <div className="nav-right">
        <div className="social-links">
          <a href="https://linkedin.com/in/samcleland34" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SamCleland034" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              <section className="hero-container">
                <span className="hero-orb orb-a" aria-hidden="true"></span>
                <span className="hero-orb orb-b" aria-hidden="true"></span>
                <div className="hero">
                  <span className="availability-badge">
                    <span className="pulse-dot"></span>
                    Open to Full-Time Opportunities
                  </span>
                  <img src={profilePic} alt="Sam Cleland" className="profile-image" />
                  <h1>Sam Cleland</h1>
                  <p className="tagline">Fordham MBA, Class of 2026 · Data Analytics · McGill Comp Eng Grad</p>
                  <p className="intro">
                    I'm a 2026 MBA graduate with a background in Computer Engineering, building at
                    the intersection of AI, software, and data. Currently looking for full-time
                    opportunities in the NY Metropolitan Area.
                  </p>
                  <div className="hero-actions">
                    <a
                      href={process.env.PUBLIC_URL + '/Sam_Cleland_AI.pdf'}
                      download
                      className="btn btn-primary"
                    >
                      <FaDownload /> Download Resume
                    </a>
                    <Link to="/projects" className="btn btn-secondary">
                      View Projects
                    </Link>
                  </div>
                </div>
              </section>

              <div className="resume-content">
                <Reveal as="section" className="resume-section">
                  <h2 className="section-title">Interests</h2>
                  <p className="section-subtitle">What I spend my time thinking about and building.</p>
                  <div className="interests-grid">
                    <Reveal delay={0} className="interest-card">
                      <div className="interest-icon-wrap">
                        <FaRobot className="interest-icon" />
                      </div>
                      <h3>Artificial Intelligence</h3>
                      <p>
                        Deeply interested in LLMs, RAG systems, and the intersection of AI with
                        real-world applications. Currently serving as VP of Tech & Research at the
                        Fordham GSB AI Society, exploring how generative AI is reshaping industries.
                      </p>
                    </Reveal>
                    <Reveal delay={100} className="interest-card">
                      <div className="interest-icon-wrap">
                        <FaCode className="interest-icon" />
                      </div>
                      <h3>Software Development</h3>
                      <p>
                        Passionate about building full-stack applications from the ground up. Enjoy
                        working across the stack — from Python backends and data pipelines to React
                        and Next.js frontends.
                      </p>
                    </Reveal>
                    <Reveal delay={200} className="interest-card">
                      <div className="interest-icon-wrap">
                        <FaChartLine className="interest-icon" />
                      </div>
                      <h3>FinTech & Data Analytics</h3>
                      <p>
                        Graduated with an MBA in Financial Technology with a focus on applying machine
                        learning and data analytics to finance. Interested in algorithmic trading,
                        risk modeling, and data-driven decision making.
                      </p>
                    </Reveal>
                  </div>
                </Reveal>

                <Reveal as="section" className="resume-section">
                  <h2 className="section-title">Skills</h2>
                  <p className="section-subtitle">Technologies I work with regularly.</p>
                  {skillGroups.map(group => (
                    <div key={group.key} className={`skill-group ${group.key}`}>
                      <span className="skill-group-label">{group.label}</span>
                      <div className="skills-container">
                        {group.skills.map(skill => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </Reveal>
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
