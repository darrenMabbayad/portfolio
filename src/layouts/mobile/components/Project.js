import React from 'react';
import { Link } from 'react-router-dom'

function Project({project}) {
    const { id, title, name } = project
    return (
        <Link to={`/portfolio/${name}`}>
            <div id={`project-mobile-${id}`} className='project-mobile'>
                <h3 className='project-mobile-title'>{title}</h3>
            </div> 
        </Link>     
    )
}

export default Project