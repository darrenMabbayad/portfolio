import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage({ projects }) {
  const { projectName } = useParams();
  const thisProject = projects.find(project => project.name === projectName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page-desktop">
      <div className="project-page-desktop-tldr">
        <div className="project-page-desktop-tldr-info">
          <h1 className="project-page-desktop-tldr-title">
            {thisProject.title}
          </h1>
          <div className="project-page-desktop-tldr-image">
            <img src={thisProject.image} alt="" />
          </div>
          <div className="project-page-desktop-tldr-info-text">
            <div>
              <h3>The Goal</h3>
              <p>{thisProject.goal}</p>
            </div>
            <div>
              <h3>Solution</h3>
              <ul>
                {thisProject.solution.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page-desktop-full">
        <p className="project-page-desktop-full-text">{thisProject.context}</p>
        <p className="project-page-desktop-full-text">
          {thisProject.explanationOne}
        </p>
        {thisProject.extraImg_1 && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_1} alt="" />
          </div>
        )}

        <p className="project-page-desktop-full-text">
          {thisProject.explanationTwo}
        </p>
        {thisProject.extraImg_1_odd && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_1_odd} alt="" />
          </div>
        )}
        <p className="project-page-desktop-full-text">
          {thisProject.explanationThree}
        </p>

        {thisProject.extraImg_2 && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_2} alt="" />
          </div>
        )}
        <p className="project-page-desktop-full-text">
          {thisProject.explanationFour}
        </p>

        {thisProject.extraImg_2_odd && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_2_odd} alt="" />
          </div>
        )}
        <p className="project-page-desktop-full-text">
          {thisProject.explanationFive}
        </p>

        {thisProject.extraImg_3 && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_3} alt="" />
          </div>
        )}
        {thisProject.explanationSix && (
          <p className="project-page-desktop-full-text">
            {thisProject.explanationSix}
          </p>
        )}

        {thisProject.extraImg_3_odd && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_3_odd} alt="" />
          </div>
        )}
        {thisProject.explanationSeven && (
          <p className="project-page-desktop-full-text">
            {thisProject.explanationSeven}
          </p>
        )}

        {thisProject.extraImg_4 && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_4} alt="" />
          </div>
        )}
        {thisProject.explanationEight && (
          <p className="project-page-desktop-full-text">
            {thisProject.explanationEight}
          </p>
        )}

        {thisProject.extraImg_4_odd && (
          <div className="project-page-desktop-full-image">
            <img src={thisProject.extraImg_4_odd} alt="" />
          </div>
        )}
        {thisProject.explanationNine && (
          <p className="project-page-desktop-full-text">
            {thisProject.explanationNine}
          </p>
        )}

        {thisProject.explanationTen && (
          <p className="project-page-desktop-full-text">
            {thisProject.explanationTen}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
