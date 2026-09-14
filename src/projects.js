import { useMemo, useState } from 'react';
import './App.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Reveal } from './Reveal.js';

const projects = [
  {
    title: 'LoL AI Analyzer',
    description: 'Built an League of Legends AI Analyzer using Gemini to analyze game performance and suggest improvements.',
    link: 'https://github.com/SamCleland034/lol-coach',
    demoLink: 'https://lol-ai-analyzer.vercel.app',
    tags: ['Python', 'React', 'Typescript', 'Gemini', 'Vercel', 'Riot Developer API'],
  },
  {
    title: 'RAG-AI Meal-Prep Service',
    description: 'Built a RAG-AI System using GPT-4o/Gemini to automate personalized 7-day meal plans with ChromaDB for persistence. Hosted on Google Cloud.',
    link: 'https://github.com/SamCleland034/NourishAI',
    demoLink: 'https://nourish-ai-nu.vercel.app',
    tags: ['Python', 'RAG', 'GPT-4o', 'Gemini', 'Pinecone', 'Vercel', 'Supabase'],
  },
  {
    title: 'NCAA Basketball Predictor',
    description: 'Created a TensorFlow SNN model to predict probabilities of March Madness games. Finished 2nd place out of 10 teams.',
    link: 'https://github.com/SamCleland034/March-Madness',
    tags: ['Python', 'TensorFlow', 'Neural Network', 'Sports Analytics'],
  },
  {
    title: 'Trading Algorithm Dashboard',
    description: 'Next.js/TypeScript frontend dashboard for visualizing and monitoring the LLM-based crypto sentiment trading signals in real time.',
    link: 'https://github.com/SamCleland034/Trading-Algorithm-UI',
    tags: ['Next.js', 'TypeScript', 'CSS'],
  },
  {
    title: 'IMDB Box Office Mojo Web Scraper',
    description: 'Web scraper that extracts box office performance data from IMDB and Box Office Mojo for downstream analysis and reporting.',
    link: 'https://github.com/SamCleland034/IMDB-Box-Office-Mojo-Web-Scraper',
    tags: ['Python', 'Web Scraping', 'Data Analysis'],
  },
  {
    title: "Autonomous Robot Navigation (McGill)",
    description: "Java-based software for an autonomous robot designed to navigate a course, avoid obstacles, and complete tasks as part of McGill's ECSE-211 engineering design competition.",
    link: 'https://github.com/SamCleland034/ECSE-211-Design-Team-3',
    tags: ['Java', 'Robotics', 'Embedded Systems'],
  },
  {
    title: 'NLP Contract Risk Analyzer',
    description: 'Developed automated NLP pipeline to classify contract clauses into risk categories using Bidirectional LSTM in TensorFlow.',
    link: 'https://github.com/SamCleland034/NLP-Contract-Risk-Analyzer',
    tags: ['Python', 'TensorFlow', 'NLP', 'LSTM', 'Text Classification'],
  },
];

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags))).sort()];

function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = useMemo(() => {
    if (activeTag === 'All') return projects;
    return projects.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="intro">A selection of my recent technical work and academic achievements.</p>
      </div>

      <div className="filter-bar">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-chip ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">No projects match that filter.</p>
      ) : (
        <div className="project-list">
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 80} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-card-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
