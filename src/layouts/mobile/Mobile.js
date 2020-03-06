import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectPage from './pages/ProjectPage'
import projectData from '../../projectData'

function Mobile() {
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)
    const [animateAbout, setAnimateAbout] = useState(about)
    const [animateContact, setAnimateContact] = useState(contact)
    const [index, setIndex] = useState(projectData[0]) // this will hold the project object and pass it down to Home.js 

    function handleClick(event) {
        const { name } = event.target
        // Handle the appearance of the about and contact portals
        // If home, go back, or portfolio are clicked, close the portal
        if (name === 'about') {
            /* If the user wants to see the about overlay, but the contact
               overlay is already rendered, close the contact overlay and 
               have the user press the about button again to display the about
               overlay. 

               This prevents issues with rendering due to the mount and unmount animations.
               The same logic applies with the contact overlay.
            */
            if (contact) {
                setContact(false)
            } else {
                setAbout(prev => !prev)
            }
        } else if(name === 'contact') {
            if (about) {
                setAbout(false)
            } else { 
                setContact(prev => !prev) 
            }          
        } else if (name === 'go back' || name === 'home' || name === 'portfolio' || name === 'overlay') {
            /* If any other button is pressed, hide the overlay currently displayed */
            setContact(false)
            setAbout(false)
        } else if (name === 'back') {
            /* Handle the display of the currently active project in view.
               All animations are dealt with in the SCSS files. Additionally, 
               do not allow the user to access project indexes that are not in 
               the scope of the projects array.
            */
            if (index.id === 0) {
                return console.log('already displaying first project')
            } else setIndex(projectData[(index.id - 1)])
        } else if (name === 'next') {
            if (index.id === projectData.length - 1) {
                return console.log('already displaying last project')
            } else setIndex(projectData[(index.id + 1)])
        }
        else return console.log(`error, button has name '${name}'`)
    }

    /* Watch for the mounting and unmounting of the about and contact portals.
       
       When setAnimateAbout is true, render the about portal and if the 
       about state is true, begin the fadeIn animation. 
       
       On the end of the animation, onAboutEnd will run and will only set 
       animateAbout to false if about is false. 
       
       When the user closes the portal and about is false, on the animation end, animateAbout
       is set to false and the component is unrendered.

       This logic applies to the contact overlay as well.
    */
    useEffect(() => {
        if (about) {
            setAnimateAbout(true)
        }
    }, [about])

    useEffect(() => {
        if (contact) {
            setAnimateContact(true)
        }
    }, [contact])

    function onAboutEnd() {
        if (!about) {
            setAnimateAbout(false)
        }
    }

    function onContactEnd() {
        if (!contact) {
            setAnimateContact(false)
        }
    }

    return (
        <Layout handleClick={handleClick}>
            <div className='mobile-app'>
                <Switch >
                    <Route exact path ='/'>
                        <Home index={index} projects={projectData} handleClick={handleClick}/>
                    </Route>

                    <Route path='/:projectName'>
                        <ProjectPage projects={projectData}/>
                    </Route>                  
                </Switch>
                { 
                    animateAbout ? createPortal(
                        <div 
                            style={{animation: `${about ? 'fadeIn' : 'fadeOut'} 0.15s` }} 
                            onAnimationEnd={onAboutEnd}
                        >
                            <About handleClick={handleClick}/>
                        </div>, document.getElementById('portal-root')) :
                    animateContact ? createPortal(
                        <div
                            style={{animation: `${contact ? 'fadeIn' : 'fadeOut'} 0.15s` }}
                            onAnimationEnd={onContactEnd}
                        >
                            <Contact handleClick={handleClick}/>
                        </div>, document.getElementById('portal-root')) : null
                }
            </div>
        </Layout>
    )
}

export default Mobile