import React from 'react'
import introImg from '../../../img/intro.jpg'
import Project from '../components/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Home({index, projects, handleClick}) {
    const offSet = index.id * 100 / projects.length

    return (
        <div className='home-mobile'>
            <div className='intro-mobile'>
                <h2 className='intro-mobile-greeting'>Hi, my 
                    <strong>name is</strong>
                    <strong className='intro-mobile-first-name'>Darren</strong>
                </h2>
                <p className='intro-mobile-occupation'>front-end dev and
                    <span className='intro-mobile-occupation-2'>ui/ux Designer</span>
                </p>
                <img className='intro-mobile-img' src={introImg} alt=''/>
            </div>
            <div className='slider-buttons'>
                <button 
                    name='back' 
                    className='back-button'
                    onClick={event => handleClick(event)}
                >
                    <FontAwesomeIcon className='back-button-icon' icon={faChevronLeft} size='2x'/>
                </button>
                <h3 className='intro-mobile-project-heading'>My Work</h3>
                <button 
                    name='next' 
                    className='next-button'
                    onClick={event => handleClick(event)}
                >
                    <FontAwesomeIcon className='next-button-icon' icon={faChevronRight} size='2x'/>
                </button>
            </div>
            <div className={`carousel-container active-project-${index.id}`}>
                <div 
                    className='carousel'
                    style={{transform: `translateX(-${offSet}%)`}}
                >
                    {
                        projects.map(project => <Project key={project.id} project={project}/>)
                    }               
                </div>
            </div>
        </div>
    )
}

export default Home
