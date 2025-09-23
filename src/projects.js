import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './App.css';

function Projects() {
  const projects = [
    {
      title: "NCAA Basketball Predictor",
      description: "•	Competition where teams were tasked with creating a model with any data to predict probabilities of March Madness games. Finished 2nd place out of 10 teams by creating a TensorFlow SNN model using provided data as well as data from external sources such as CBB on Kaggle, altitude data of campuses and basketball-reference.",
      link: "https://github.com/SamCleland034/March-Madness",
    },
    {
      title: "Real Time Trading Algorithm",
      description: "Algorithmic Trading Dashboard showing the trades the script is running, base amount starts at 100k (paper trading). ",
      link:"https://github.com/SamCleland034/Trading-Algorithm",
    },
    {
      title: "NLP Tool for Contract Risk Analysis",
      description: "•	Developed automated NLP pipeline to extract, preprocess, and classify contract clauses into low/moderate/high risk categories using regex for extraction, NLTK/WordNet for lemmatization/tokenization, and Bidirectional LSTM model in TensorFlow.",
      link:"https://github.com/SamCleland034/NLP-Contract-Risk-Analyzer",
    },


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