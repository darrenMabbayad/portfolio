import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function About({handleClick}) {
    return (
        <div>
            <button name='overlay' onClick={handleClick} className='mobile-page-overlay'></button>
            <div className='mobile-main-overlay about-overlay'>  
                <div className='mobile-about-info'>
                    <h2 className='mobile-about-heading'>Who am I?</h2>     
                    <p className='mobile-about-description'>
                        I am a React developer. If you need to create a component library, create useful React hooks,
                        or simply just implement a website using React, I can do that for you. Whether your application is simple and 
                        can be bootstrapped with create-react-app or needs to be linked with a content management system using Gatsby.js, 
                        I am more than capable of building your app and making it look beautiful at the same time.
                    </p>  
                    <p className='mobile-about-description'>
                        I am a UI/UX designer. I can design prototypes of web applications, simple or more complex/functional, 
                        using Adobe XD. Though it may be fun to design things just for good looks, I can always provide insight into why
                        I go about typography in a certain way, why certain color schemes were used, why I went about responsive design in a certain way,
                        and why I implement certain UI elements to make the overall user experience that much better. 
                    </p> 
                    <p className='mobile-about-description'>
                        Most importantly, I am an Electrical Engineering Tech graduate that, after receiving my diploma, decided to go down
                        the path of web development. With this, I am entirely self taught. I could have paid for a full-stack bootcamp, but I decided to 
                        learn this way both for financial reasons and because I feel much more motivated when I can simply go down a tech rabbit hole on 
                        a topic that I enjoy. I have loved everything about what I've learn so far and I am passionate about making web apps and especially 
                        making them look good while I'm at it.
                    </p>             
                    <div className='mobile-row'>
                        <Button className='mobile-button first' handleClick={handleClick} text='go back'/>
                        <Link to='/' target='_blank' rel="noopener noreferrer"><Button className='mobile-button' handleClick={handleClick} text='home'/></Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About
