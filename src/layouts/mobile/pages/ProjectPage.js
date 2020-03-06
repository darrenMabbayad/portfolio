import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectPage({projects}) {
    const { projectName } = useParams()
    const thisProject = projects.find(project => project.name === projectName)

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
            <div className='project-page-desktop-full'>
                <p className='project-page-desktop-full-text'>{thisProject.context}</p>
                <p className='project-page-desktop-full-text'>{thisProject.explanationOne}</p>
                <div className='project-page-desktop-full-image'>
                        <img src={thisProject.extraImg_1} alt=''/>                      
                </div>
                <p className='project-page-desktop-full-text'>{thisProject.explanationTwo}</p>
                <p className='project-page-desktop-full-text'>{thisProject.explanationThree}</p>
                <p className='project-page-desktop-full-text'>{thisProject.explanationFour}</p>
                <p className='project-page-desktop-full-text'>{thisProject.explanationFive}</p>
                {thisProject.explanationSix ? <p className='project-page-desktop-full-text'>{thisProject.explanationSix}</p> : null}
                {thisProject.explanationSeven ? <p className='project-page-desktop-full-text'>{thisProject.explanationSeven}</p> : null}
                {thisProject.explanationEight ? <p className='project-page-desktop-full-text'>{thisProject.explanationEight}</p> : null}
                {thisProject.explanationNine ? <p className='project-page-desktop-full-text'>{thisProject.explanationNine}</p> : null}
                {thisProject.explanationTen ? <p className='project-page-desktop-full-text'>{thisProject.explanationTen}</p> : null}
            </div>
        </div>
    )
}

export default ProjectPage
