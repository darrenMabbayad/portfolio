import React from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="projects-mobile">
      <div className="projects-mobile-card">
        <div className="projects-mobile-card-info">
          <h1 className="projects-mobile-card-info-title">{project.title}</h1>
          <div className="projects-mobile-image">
            <img src={project.image} alt="" />
          </div>
          <p className="projects-mobile-card-info-descr">
            {project.description}
          </p>
          <div className="projects-mobile-card-info-links">
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
        <div className="projects-mobile-card-list">
          <h3 className="projects-mobile-card-list-heading">
            Technologies Used:
          </h3>
          <ul>
            {project.technologies.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
