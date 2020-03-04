import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    return (
        <header className='header-mobile'>
            <p className='logo'>{'< dev dm >'}</p>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-links-link'><a href='#projects'>Projects</a></li>
                    <li className='nav-links-link'><a href='#about'>About</a></li>
                    <li className='nav-links-link'><a href='#contact'>Contact</a></li>
                    { 
                        location.pathname !== '/' ? 
                            <li>
                                <Link to='/'>
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