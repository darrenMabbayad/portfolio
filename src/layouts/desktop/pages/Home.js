import React from 'react'
import { Link } from 'react-router-dom'
import introImg from '../../../img/intro.jpg'
import About from '../components/About'

function Home({projects}) {
    return (
        <div>
            <div className='intro-desktop'>
                <h1 className='intro-desktop-heading'>Hi, my 
                    <strong>name is</strong>
                    <strong className='intro-desktop-name'>Darren</strong>
                </h1>
                <p className='intro-desktop-description'>front-end dev and
                    <span className='intro-desktop-description-2'>ui/ux Designer</span>
                </p>
                <img className='intro-desktop-img' src={introImg} alt=''/>
            </div>
            <About />
            <div id='projects' className='projects-desktop'>
                {
                    projects.map(project => (
                        <div key={project.id} className='projects-desktop-project'>
                            <div className='projects-desktop-image'>
                                <img src={project.image} alt=''/>
                            </div>
                            <div className='projects-desktop-text'>
                                <div className='projects-desktop-text-info'>
                                    <h1 className='projects-desktop-text-info-title'>{project.title}</h1>
                                    <p className='projects-desktop-text-info-descr'>{project.description}</p>
                                    <div>
                                        <Link className='learn-more-btn' to={`/${project.name}`}>Learn More</Link>
                                        <a 
                                            className='learn-more-btn togithub' 
                                            href={project.githubRepo}
                                            target='_blank' 
                                            rel="noopener noreferrer"
                                        >
                                            Github Repo
                                        </a>
                                    </div>
                                </div>
                                <div className='projects-desktop-text-list'>
                                    <h3 className='projects-desktop-text-list-heading'>Technologies Used:</h3>
                                    <ul>
                                        {
                                            project.technologies.map((technology, i) => <li key={i}>{technology}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div id='about'>
                <div className='about-desktop'>
                    <h1 className='about-desktop-main-heading'>A Little More About Me</h1>
                    <p className='about-desktop-info'>
                        I am an Electrical Engineering Tech graduate that, after receiving my diploma, decided to go down
                        the path of web development. With this, I am entirely self taught. I could have paid for a full-stack bootcamp, but I decided to 
                        learn this way both for financial reasons and because I feel much more motivated when I can simply go down a tech rabbit hole on 
                        a topic that I enjoy. I have loved everything about what I've learn so far and I am passionate about making web apps and especially 
                        making them look good while I'm at it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
