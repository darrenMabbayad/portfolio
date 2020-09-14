import React from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="projects-desktop-card">
      <div className="projects-desktop-card-info">
        <h1 className="projects-desktop-card-info-title">{project.title}</h1>
        <div className="projects-desktop-image">
          <img src={project.image} alt="" />
        </div>
        <p className="projects-desktop-card-info-descr">
          {project.description}
        </p>
        <div className="projects-desktop-card-info-links">
          <Link className="learn-more-btn" to={`/${project.name}`}>
            Learn More
          </Link>
          <a
            className="learn-more-btn togithub"
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
          {project.deployLink && (
            <a
              className="learn-more-btn togithub"
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          )}
        </div>
      </div>
      <div className="projects-desktop-card-list">
        <h3 className="projects-desktop-card-list-heading">
          Technologies Used:
        </h3>
        <ul>
          {project.technologies.map((technology, i) => (
            <li key={i}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
