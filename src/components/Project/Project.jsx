import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Project.css";

const projects = [
  {
    title: "Chat-app",
    description:
      "A chat appplatform with real-time communication using WebRTC and a clean UI.",
    tech: ["MERN Stack", "Socket.IO", "WebRTC", "Tailwind CSS"],
    github: "https://github.com/gpalakgupta/chat-app",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive and visually appealing personal portfolio showcasing projects, skills, and contact information, built with React and JavaScript.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/gpalakgupta/Portfolio",
  },
  {
    title: "Food Delivery",
    description:
      "A food delivery platform that allows users to browse and order food from local restaurants with a sleek and responsive UI.",
    tech: ["MERN Stack", "Stripe", "Tailwind CSS"],
    github: "https://github.com/gpalakgupta/Food-delivery",
  },
  {
    title: "E-commerce",
    description:
      "An e-commerce platform that allows users to browse and purchase products from various categories with a user-friendly interface.",
    tech: ["MERN Stack", "Razorpay", "EJS"],
    github: "https://github.com/gpalakgupta/E-commerce",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        These projects showcase my technical skills and experience through
        real-world applications. Each project includes a brief description and
        links to the code repository and live demo.
      </p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            <div className="project-tech">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noreferrer">
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
