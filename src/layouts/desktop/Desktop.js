import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import { Route, Switch } from 'react-router-dom'
import projectData from '../../projectData'

function Desktop() {

    function handleClick() {

    }

    return (
        <div>
            <Header />
            <div className='desktop-app'>
                <Switch >
                    <Route exact path ='/'>
                        <Home projects={projectData} handleClick={handleClick}/>
                    </Route>
                    <Route path='/portfolio/:projectName'>
                        <ProjectPage />
                    </Route>                  
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default Desktop
