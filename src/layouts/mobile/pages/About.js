import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function About({handleClick}) {
    return (
        <div>
            <button name='overlay' onClick={handleClick} className='mobile-page-overlay'></button>
            <div className='mobile-main-overlay'>  
                <div className='mobile-about-info'>
                    <h2 className='mobile-about-heading'>Who am I?</h2>     
                    <p className='mobile-about-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque dictum purus. 
                        Praesent a ligula consectetur, luctus lacus in, faucibus sapien. Sed consectetur ex at massa 
                        malesuada aliquam. 
                    </p>  
                    <p className='mobile-about-description'>
                        Mauris quam nisi, gravida id accumsan sit amet, iaculis vel ipsum. Curabitur 
                        vitae semper velit, non efficitur ipsum. Cras sollicitudin quis neque et bibendum. Aenean 
                        magna eros, mattis a sapien at, dapibus molestie leo. 
                    </p>             
                    <div div className='mobile-row'>
                        <Button className='mobile-button first' handleClick={handleClick} text='go back'/>
                        <Link to='/'><Button className='mobile-button' handleClick={handleClick} text='home'/></Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About
