import React from "react";
import introImg from "../../../img/intro.jpg";
import About from "../components/About";
import Project from "../components/Project";

function Home({ projects }) {
  return (
    <div>
      <div className="intro-desktop">
        <h1 className="intro-desktop-heading">
          Hi, my
          <strong>name is</strong>
          <strong className="intro-desktop-name">Darren</strong>
        </h1>
        <p className="intro-desktop-description">
          front-end dev and
          <span className="intro-desktop-description-2">ui/ux Designer</span>
        </p>
        <img className="intro-desktop-img" src={introImg} alt="" />
      </div>
      <About />
      <div id="projects" className="projects-desktop">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div id="about">
        <div className="about-desktop-extra">
          <h1 className="about-desktop-extra-main-heading">
            A Little More About Me
          </h1>
          <p className="about-desktop-extra-info">
            I am an Electrical Engineering Tech graduate that, after receiving
            my diploma, decided to go down the path of web development. With
            this, I am entirely self taught. I could have paid for a full-stack
            bootcamp, but I decided to learn this way both for financial reasons
            and because I feel much more motivated when I can simply go down a
            tech rabbit hole on a topic that I enjoy.
          </p>
          <br />
          <p className="about-desktop-extra-info">
            Since I started, I've worked on the small apps that you can check
            out above and I've participated in a month long co-op where I got to
            see what an Agile development working environment was like. I have
            loved everything about what I've learned so far and I am passionate
            about making web apps and especially making them look good while I'm
            at it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
