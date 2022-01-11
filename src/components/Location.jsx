import React from 'react';
import './styles/Location.css';
import image from '../assets/map.png';

function Location() {
    return (
        <div className='loc' style={{backgroundColor : "rgb(60, 60, 60)"}}>
        <h1 style={{color : "white", textAlign : "center", fontWeight : "bold"}}><br/><br/><span>/ </span>Our location <span> /</span></h1>
        <div className='location'>
            <img src = {image} className='photo' />
        </div>
        </div>
    )
}

export default Location
