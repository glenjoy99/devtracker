import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='logo'>
                <img src='us1transparent.png' alt="alternatetext"></img>
            </div>
            <div className='logotext'>
                <h1>Dev</h1>
                <h1>Tracker</h1>
            </div>
            <div className='links'>
                <div className='link'><h2>Map</h2></div> 
                <div className='link'><h2>About</h2></div> 
                <div className='link'><h2>Contact</h2></div> 
            </div>
        </div>
    )
}

export default Header
