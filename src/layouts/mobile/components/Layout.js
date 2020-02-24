import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, handleClick }) {
    return (
        <>
            <Header />
            { children }
            <Footer handleClick={handleClick}/>
        </>
    )
}

export default Layout
