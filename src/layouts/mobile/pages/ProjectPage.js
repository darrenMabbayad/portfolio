import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectPage() {
    const { projectTitle } = useParams()
    return (
        <div>
            {projectTitle}
        </div>
    )
}

export default ProjectPage
