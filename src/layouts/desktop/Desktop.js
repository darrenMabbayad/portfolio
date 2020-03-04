import React from 'react'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import { Route, Switch } from 'react-router-dom'
import projectData from '../../projectData'
import Layout from '../desktop/components/Layout'

function Desktop() {

    function handleClick() {

    }

    return (
        <Layout >
            <div className='desktop-app'>
                <Switch >
                    <Route exact path ='/'>
                        <Home projects={projectData} handleClick={handleClick}/>
                    </Route>
                    <Route path='/:projectName'>
                        <ProjectPage projects={projectData}/>
                    </Route>                  
                </Switch>
            </div>
        </Layout>
    )
}

export default Desktop
