import React from 'react'
import './Card.css'

function Card(props) {
    // var root = document.querySelector(':root');
    // root.style.setProperty('--imgurl', 'url(' + props.img + ')')

    return (
        <div className='card'>
            <div className ="picture"><img src={props.img} alt="alternatetext"></img></div>
            <div className='text-desc'>
                <h3>{props.name}</h3>
                <h4>{props.place}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card
