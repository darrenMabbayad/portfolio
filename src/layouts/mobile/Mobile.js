import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function Mobile() {
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)

    function handleClick(event) {
        const { name } = event.target
        // handle the appearance of the about and contact portals
        // if home, go back, or portfolio are clicked, close the portal
        if (name === 'about') {
            if (contact) {
                setContact(false)
            } 
            setAbout(prev => !prev)
        } else if(name === 'contact') {
            if (about) {
                setAbout(false)
            } 
            setContact(prev => !prev)
        } else if (name === 'go back' || name === 'home' || name === 'portfolio' || name === 'overlay') {
            setContact(false)
            setAbout(false)
        } else return console.log(`error, button has name '${name}'`)
    }

    return (
        <div className='mobile-app'>
            <Header />
            <Switch >
                <Route exact path ='/'>
                    <Home />
                </Route>

                <Route path='/portfolio'>
                    <Portfolio />
                </Route>                
            </Switch>
            { 
                about ? createPortal(<About handleClick={handleClick}/>, document.getElementById('portal-root')) :
                contact ? createPortal(<Contact handleClick={handleClick}/>, document.getElementById('portal-root')) : null
            }
            <Footer handleClick={handleClick}/>
        </div>
    )
}

export default Mobile
