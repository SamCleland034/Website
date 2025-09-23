import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './App.css';

function Projects() {
  const projects = [
    {
      title: "NCAA Basketball Predictor",
      description: "Competition where teams were tasked with creating a model with any data to predict probabilities of March Madness games using a TensorFlow SNN model. Finished 2nd place out of 10 teams.",
      link: "https://github.com/SamCleland034/March-Madness",
    },
    {
      title: "Real Time Trading Algorithm",
      description: "Algorithmic Trading Dashboard showing the trades I make using my python script, base amount starts at 100k (paper trading). ",
      link:"SamCleland034.github.io/Trading-Algorithm",
    },
    {
      title: "NLP Tool for Contract Risk Analysis",
      description: "Developed automated NLP pipeline to extract, preprocess, and classify contract clauses into low/moderate/high risk categories using regex for extraction, NLTK/WordNet for lemmatization/tokenization, and Bidirectional LSTM model in TensorFlow.",
      link:"https://github.com/SamCleland034/NLP-Contract-Risk-Analyzer",
    },
    {
      title: "Robot Obstacle Course",
      description: "Created Robot using Java Lejos EV3 to play a game of Capture the Flag on an obstacle course. Robot had to traverse a zipline in order to complete the course. Finished first place out of 20 teams.",
      link: "https://github.com/SamCleland034/ECSE-211-Design-Team-3"
    },
    {
      title: "Modified Monte Carlo Tree Search AI for Board Game",
      description: "Implemented variant of MCTS with modified Upper Confidence Bound to simulate both player and opponent actions in a game called Pentago-Swap, incorporating minimax-like minimization for opponent turns to better model adversarial play. Finished in top 5% of students.",
      link: "https://github.com/SamCleland034/COMP-424"
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