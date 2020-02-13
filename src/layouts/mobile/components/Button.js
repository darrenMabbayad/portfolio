import React from 'react'

function Button({className, text, handleClick}) {
    return (
        <button 
            name={text} 
            className={className} 
            onClick={event => handleClick(event)}>
                {text}
            </button>
    )
}

export default Button
