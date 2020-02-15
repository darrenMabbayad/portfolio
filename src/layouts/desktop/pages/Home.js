import React from 'react'
import { Link } from 'react-router-dom'
import introImg from '../../../img/intro.png'
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
            <div className='projects-desktop'>
                {
                    projects.map(project => (
                        <div key={project.id}>
                            <div></div>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            {
                                project.description2 ? <p>{project.description2}</p> : null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
