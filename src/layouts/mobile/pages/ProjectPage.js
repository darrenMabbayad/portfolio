import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectPage() {
    const { projectName } = useParams()
    return (
        <div>
            {projectName}
        </div>
    )
}

export default ProjectPage
