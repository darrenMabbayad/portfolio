import React from 'react';
import { Link } from 'react-router-dom'

function Project({project}) {
    const { id, title, name } = project
    return (
        <div>
            <Link to={`/${name}`}>
                <div id={`project-mobile-${id}`} className='project-mobile'>
                    <h3 className='project-mobile-title'>{title}</h3>
                </div> 
            </Link>     
            <p className='project-mobile-description'>{project.description}</p>
        </div>
    )
}

export default Project