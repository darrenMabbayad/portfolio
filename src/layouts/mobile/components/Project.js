import React from 'react';
import { Link } from 'react-router-dom'

function Project({project}) {
    const { id, title, name } = project
    return (
        <div>
            <Link to={`/${name}`}>
                <div 
                    style={{
                        backgroundImage: `url(${project.image})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                    id={`project-mobile-${id}`}
                    className='project-mobile'
                >
                    <div className='project-mobile-title'>
                        <h3 className='project-mobile-title-text'>{title}</h3>
                    </div>
                </div> 
            </Link>     
            <p className='project-mobile-description'>{project.description}</p>
        </div>
    )
}

export default Project