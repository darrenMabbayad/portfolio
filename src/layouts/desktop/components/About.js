import React from 'react'

function About() {
    return (
        <div className='about-desktop'>
            <h1 className='about-desktop-main-heading'>What can I do for you?</h1>
            <div className='about-desktop-info'>
                <div className='about-desktop-info-section'>
                    <h2 className='about-desktop-sub-heading'>React</h2>
                    <p className='about-desktop-description'>If you need to create a component library, create useful React hooks,
                    or simply just implement a website using React, I can do that for you. Whether your application is simple and 
                    can be bootstrapped with create-react-app or needs to be linked with a content management system using Gatsby.js, 
                    I am more than capable of building your app and making it look beautiful at the same time.</p>
                </div>
                <div className='about-desktop-info-section'>
                    <h2 className='about-desktop-sub-heading'>UI/UX Design</h2>
                    <p className='about-desktop-description'>I can design prototypes of web applications, simple or more complex/functional, 
                    using Adobe XD. Though it may be fun to design things just for good looks, I can always provide insight into why
                    I go about typography in a certain way, why certain color schemes were used, why I went about responsive design in a certain way,
                    and why I implement certain UI elements to make the overall user experience that much better.</p>
                </div>
            </div>
        </div>
    )
}

export default About
