import React from 'react'
import projectData from '../../../projectData'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <div className='portfolio-mobile'>
            {
                projectData.map(project => (
                    <div key={project.id} className='portfolio-mobile-project'>
                        <div className='portfolio-mobile-image'></div>
                        <h1 className='portfolio-mobile-title'>{project.title}</h1>
                        <p className='portfolio-mobile-description'>{project.description}</p>
                        {
                            project.description2 ? 
                                <p className='portfolio-mobile-description2'>{project.description2}</p> : null
                        }
                        <Link to={`/portfolio/${project.name}`}>
                            <div className='portfolio-mobile-btn'>Learn More</div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Portfolio
