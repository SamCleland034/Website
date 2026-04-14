import React from 'react';
import './App.css';

function Projects() {
  const projects = [
    {
      title: "RAG-AI Meal-Prep Service",
      description: "Built a RAG-AI System using GPT-4o/Gemini to automate personalized 7-day meal plans with ChromaDB for persistence. Hosted on Google Cloud.",
      link: "https://github.com/SamCleland034/NourishAI",
      demoLink: "https://nourish-ai-nu.vercel.app",
      tags: ["Python", "RAG", "GPT-4o", "Gemini", "ChromaDB", "Google Cloud"],
    },
    {
      title: "NCAA Basketball Predictor",
      description: "Created a TensorFlow SNN model to predict probabilities of March Madness games. Finished 2nd place out of 10 teams.",
      link: "https://github.com/SamCleland034/March-Madness",
      tags: ["Python", "TensorFlow", "Neural Network", "Sports Analytics"],
    },
    {
      title: "Trading Algorithm Dashboard",
      description: "Next.js/TypeScript frontend dashboard for visualizing and monitoring the LLM-based crypto sentiment trading signals in real time.",
      link: "https://github.com/SamCleland034/Trading-Algorithm-UI",
      tags: ["Next.js", "TypeScript", "CSS"],
    },
    {
      title: "IMDB Box Office Mojo Web Scraper",
      description: "Web scraper that extracts box office performance data from IMDB and Box Office Mojo for downstream analysis and reporting.",
      link: "https://github.com/SamCleland034/IMDB-Box-Office-Mojo-Web-Scraper",
      tags: ["Python", "Web Scraping", "Data Analysis"],
    },
    {
      title: "Autonomous Robot Navigation (McGill)",
      description: "Java-based software for an autonomous robot designed to navigate a course, avoid obstacles, and complete tasks as part of McGill's ECSE-211 engineering design competition.",
      link: "https://github.com/SamCleland034/ECSE-211-Design-Team-3",
      tags: ["Java", "Robotics", "Embedded Systems"],
    },
    {
      title: "NLP Contract Risk Analyzer",
      description: "Developed automated NLP pipeline to classify contract clauses into risk categories using Bidirectional LSTM in TensorFlow.",
      link: "https://github.com/SamCleland034/NLP-Contract-Risk-Analyzer",
      tags: ["Python", "TensorFlow", "NLP", "LSTM", "Text Classification"],
    },
  ];

  return (
    <div className="projects-container">
      <div className="hero">
        <h1>Projects</h1>
        <p className="intro">A selection of my recent technical work and academic achievements.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-card-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
