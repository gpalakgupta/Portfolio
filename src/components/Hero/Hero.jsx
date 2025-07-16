import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <p className="subtitle">CRAFTING INNOVATIVE WEB SOLUTIONS WITH MERN STACK</p>
      <h1>
        Hi! I'm <span className="highlight">Palak Gupta</span>, a Web Developer with a passion for creating dynamic applications.
      </h1>
      <button className="explore-button" onClick={scrollToProjects}>
        Explore My Projects
      </button>
    </section>
  );
};

export default Hero;
