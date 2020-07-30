import React from 'react';
import { Link } from 'react-router-dom';

function Project({ project }) {
  return (
    <>
      <div className='projects-desktop-image'>
        <img src={project.image} alt='' />
      </div>
      <div className='projects-desktop-text'>
        <div className='projects-desktop-text-info'>
          <h1 className='projects-desktop-text-info-title'>{project.title}</h1>
          <p className='projects-desktop-text-info-descr'>
            {project.description}
          </p>
          <div>
            <Link className='learn-more-btn' to={`/${project.name}`}>
              Learn More
            </Link>
            <a
              className='learn-more-btn togithub'
              href={project.githubRepo}
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </a>
            {project.deployLink && (
              <a
                className='learn-more-btn togithub'
                href={project.deployLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Link
              </a>
            )}
          </div>
        </div>
        <div className='projects-desktop-text-list'>
          <h3 className='projects-desktop-text-list-heading'>
            Technologies Used:
          </h3>
          <ul>
            {project.technologies.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
