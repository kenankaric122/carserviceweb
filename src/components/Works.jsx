import React from 'react';
import './styles/Works.css';
import image1 from '../assets/w1.jpg';
import image2 from '../assets/w2.jpg';
import image3 from '../assets/w3.jpg';
import image4 from '../assets/w4.jpg';

function Works() {
    return (
        <div className='w1'>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "8%", fontWeight : "bold"}}><span>/ </span>How it works<span> /</span></h1>
        <div className='works'>
            <div className='card2'>
                <img src={image1}/>
                <h2>Make an appointment</h2>
            </div>
            <div className='card2'>
                <img src={image2}/>
                <h2>Select services</h2>
            </div>
            <div className='card2'>
                <img src={image3}/>
                <h2>Confirm request</h2>
            </div>
            <div className='card2'>
                <img src={image4}/>
                <h2>Get your car back</h2>
            </div>
        </div>
        </div>
    )
}

export default Works
