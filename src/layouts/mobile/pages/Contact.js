import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import referenceLinks from '../../../referenceLinks'
import pdf from '../../../documents/resume_frontend_2020.pdf'

function Contact({handleClick}) {
    return (
        <div>
            <button name='overlay' onClick={handleClick} className='mobile-page-overlay'></button>
            <div className='mobile-main-overlay'>
                <div>
                    <div className='mobile-row'>
                        <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                        <a className='mobile-contact-link' href='mailto:mabbayadd@gmail.com'>mabbayadd@gmail.com</a>
                    </div>

                    <div className='mobile-row'>
                        <FontAwesomeIcon icon={faFile} size='lg'/>
                        <a 
                            className='mobile-contact-link' 
                            href={pdf}
                        >
                            View my Resume
                        </a>
                    </div>

                    <div className='mobile-row'>
                        <FontAwesomeIcon icon={faGithubSquare} size='lg'/>
                        <a 
                            className='mobile-contact-link' 
                            href={referenceLinks.gitHub} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            My Github Page
                        </a>
                    </div>

                    <div className='mobile-row'>
                        <FontAwesomeIcon icon={faLinkedin} size='lg'/>
                        <a 
                            className='mobile-contact-link' 
                            href={referenceLinks.linkedIn} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            My LinkedIn Page
                        </a>
                    </div>
                    
                    <div className='mobile-row'>
                        <Button className='mobile-button first' handleClick={handleClick} text='go back'/>
                        <Link to='/' target='_blank' rel="noopener noreferrer"><Button className='mobile-button' handleClick={handleClick} text='home'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
