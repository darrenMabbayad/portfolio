import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Header() {
    const location = useLocation()
    return (
        <header className='header-mobile sticky'>
            <p className='logo'>{'< dev dm >'}</p>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-links-link'><HashLink to='/#projects'>Projects</HashLink></li>
                    <li className='nav-links-link'><HashLink to='/#about'>About</HashLink></li>
                    <li className='nav-links-link'><HashLink to='/#contact'>Contact</HashLink></li>
                    { 
                        location.pathname !== '/' ? 
                            <li>
                                <Link to='/' target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon className='home-button' icon={faHome} size='lg'/> 
                                </Link>
                            </li> : null
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;