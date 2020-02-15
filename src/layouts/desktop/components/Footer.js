import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className='footer-desktop'>
            <a className='footer-desktop-email' href='mailto:mabbayadd@gmail.com'>mabbayadd@gmail.com</a>
            <div className='footer-desktop-links'>
                <FontAwesomeIcon className='footer-desktop-icon' icon={faFile} size='2x'/>
                <FontAwesomeIcon className='footer-desktop-icon' icon={faGithubSquare} size='2x'/>
                <FontAwesomeIcon className='footer-desktop-icon' icon={faLinkedin} size='2x'/>
            </div>
                
        </footer>
    )
}

export default Footer;