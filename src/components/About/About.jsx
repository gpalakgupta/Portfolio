import React from 'react';
import './About.css';
import profileImage from './pic.png.png'; // Replace with your actual image path

const About = () => {
  const skills = [
    'MERN Stack', 'JavaScript', 'HTML', 'Tailwind CSS', 'Node.js', 'Express',
    'MongoDB', 'React', 'Python', 'DSA', 'Git', 'GitHub', 'Machine Learning', 'Deep Learning'
  ];

  return (
    <div className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        Discover more about me, my skills, and what I’m passionate about!
      </p>

      <div className="about-wrapper">
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m <strong>Palak Gupta</strong>, a dedicated web developer with solid skills in the MERN stack,
              and I enjoy creating innovative web applications. I’m looking for a role in a company where I can use my technical
              skills and problem-solving abilities to work on projects. I’m eager to learn and grow while helping the company succeed.
            </p>

            <h3 className="skills-heading">Skills & Technologies</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img src={profileImage} alt="Palak Gupta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
