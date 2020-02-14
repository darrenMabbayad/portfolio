import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Footer({handleClick}) {
    return (
        <footer className='footer-mobile'>
            <div className='footer-button-row'>
                <FontAwesomeIcon className='footer-button-row-icon' icon={faFolder} size='1x'/>
                <Link to='/portfolio'>
                    <Button className='mobile-button footer-button' handleClick={handleClick} text='portfolio'/>
                </Link>
            </div>
            <div className='footer-button-row'>
                <FontAwesomeIcon className='footer-button-row-icon' icon={faUser} size='1x'/>
                <Button className='mobile-button footer-button' handleClick={handleClick} text='about'/>
            </div>
            <div className='footer-button-row'>
                <FontAwesomeIcon className='footer-button-row-icon' icon={faPhoneAlt} size='1x'/>
                <Button className='mobile-button footer-button' handleClick={handleClick} text='contact'/>
            </div>
        </footer>
    )
}

export default Footer