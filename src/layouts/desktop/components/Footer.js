import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import referenceLinks from '../../../referenceLinks'
import pdf from '../../../documents/resume_frontend_2020.pdf'

function Footer() {
    return (
        <footer id='contact' className='footer-desktop'>
            <a className='footer-desktop-email' href='mailto:mabbayadd@gmail.com'>mabbayadd@gmail.com</a>
            <div className='footer-desktop-links'>
                <a 
                    className='mobile-contact-link' 
                    href={pdf} 
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon 
                        className='footer-desktop-icon' 
                        icon={faFile} 
                        size='2x'
                        href={pdf}
                        target='_blank'
                    />
                </a>
                
                <a 
                    className='mobile-contact-link' 
                    href={referenceLinks.gitHub} 
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon 
                        className='footer-desktop-icon' 
                        icon={faGithubSquare} 
                        size='2x'
                        href={referenceLinks}
                        target='_blank'
                    />                   
                </a>

                <a 
                    className='mobile-contact-link' 
                    href={referenceLinks.linkedIn} 
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon 
                        className='footer-desktop-icon' 
                        icon={faLinkedin} 
                        size='2x'
                        href={referenceLinks}
                        target='_blank'
                    />                   
                </a>
            </div>
                
        </footer>
    )
}

export default Footer;