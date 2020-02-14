import React from 'react'
import introImg from '../../../img/intro.png'

function Home() {
    return (
        <div className='home-container'>
            <div className='intro-mobile'>
                <h1 className='intro-mobile-heading'>Hi, my 
                    <strong>name is</strong>
                    <strong className='intro-mobile-name'>Darren</strong>
                </h1>
                <p className='intro-mobile-description'>front-end dev and
                    <span className='intro-mobile-description-2'>ui/ux Designer</span>
                </p>
                <img className='intro-mobile-img' src={introImg} alt=''/>
            </div>
            <div className='carousel'></div>
        </div>
    )
}

export default Home
