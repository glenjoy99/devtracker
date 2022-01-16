import React from 'react'
import './Body.css'
import Row from './Row.js'

function Body() {
    return (
        <div className='body'>
            <Row name="UMD" display="📍 University of Maryland-College Park"/>
            <Row name="Hyattsville" display="📍 City of Hyattsville"/>
        </div>
    )
}

export default Body
