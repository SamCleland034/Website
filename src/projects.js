import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './App.css';

function Projects() {
  const projects = [
    {
      title: "NCAA Basketball Predictor",
      description: "A neural network to predict 2025 NCAA Tournament game outcomes using Python.",
      link: "https://github.com/SamCleland034/March-Madness",
    },
    {
      title: "",
      description: "",
      link:"",
    }
  ];

  return (
    <div className="App">
      <header className="hero">
        <h1>Projects</h1>
        <p className="intro">Check out my latest work and contributions!</p>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Projects;