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
                {
                    thisProject.extraImg_1 ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_1} alt=''/>                      
                        </div> : null
                }

                <p className='project-page-desktop-full-text'>{thisProject.explanationTwo}</p>
                {
                    thisProject.extraImg_1_odd ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_1_odd} alt=''/>                      
                        </div> : null
                }
                <p className='project-page-desktop-full-text'>{thisProject.explanationThree}</p>

                {
                    thisProject.extraImg_2 ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_2} alt=''/>                      
                        </div> : null
                }
                <p className='project-page-desktop-full-text'>{thisProject.explanationFour}</p>

                {
                    thisProject.extraImg_2_odd ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_2_odd} alt=''/>                      
                        </div> : null
                }
                <p className='project-page-desktop-full-text'>{thisProject.explanationFive}</p>

                {
                    thisProject.extraImg_3 ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_3} alt=''/>                      
                        </div> : null
                }
                {thisProject.explanationSix ? <p className='project-page-desktop-full-text'>{thisProject.explanationSix}</p> : null}

                {
                    thisProject.extraImg_3_odd ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_3_odd} alt=''/>                      
                        </div> : null
                }
                {thisProject.explanationSeven ? <p className='project-page-desktop-full-text'>{thisProject.explanationSeven}</p> : null}

                {
                    thisProject.extraImg_4 ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_4} alt=''/>                      
                        </div> : null
                }
                {thisProject.explanationEight ? <p className='project-page-desktop-full-text'>{thisProject.explanationEight}</p> : null}

                {
                    thisProject.extraImg_4_odd ? 
                        <div className='project-page-desktop-full-image'>
                                <img src={thisProject.extraImg_4_odd} alt=''/>                      
                        </div> : null
                }
                {thisProject.explanationNine ? <p className='project-page-desktop-full-text'>{thisProject.explanationNine}</p> : null}
                
                {thisProject.explanationTen ? <p className='project-page-desktop-full-text'>{thisProject.explanationTen}</p> : null}
            </div>
        </div>
    )
}

export default ProjectPage