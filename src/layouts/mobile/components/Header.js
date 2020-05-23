import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    return (
        <header className='header-mobile sticky'>
            <p className='logo'>{'< dev dm >'}</p>
            { 
                location.pathname !== '/' ? 
                    <Link to='/'>
                        <FontAwesomeIcon className='home-button' icon={faHome} size='lg'/> 
                    </Link> : null
            }
        </header>
    )
}

export default Header;