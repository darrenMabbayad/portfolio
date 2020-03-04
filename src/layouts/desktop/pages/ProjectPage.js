import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectPage({projects}) {
    const { projectName } = useParams()
    const thisProject = projects.find(project => project.name === projectName)

    console.log(projectName)
    return (
        <div className='project-page-desktop'>
            <div className='project-page-desktop-tldr'>
                <div className='project-page-desktop-tldr-image'>
                    <img src={thisProject.image} alt=''/>                      
                </div>
                <div className='project-page-desktop-tldr-info'>
                    <h1 className='project-page-desktop-tldr-title'>{thisProject.title}</h1>
                    <div className='project-page-desktop-tldr-info-text'>
                        <div>
                            <h3>The Goal</h3>
                            <p>{thisProject.goal}</p>
                        </div>
                        <div>
                            <h3>Context</h3>
                            <ul>
                                {
                                    thisProject.contextList.map((item, i) => <li key={i}>{item}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>The Solution</h3>
                            <p>{thisProject.solution}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>{thisProject.context}</p>
        </div>
    )
}

export default ProjectPage
