import React from 'react'
import './styles/Specials.css'
import image1 from '../assets/special1.webp';
import image2 from '../assets/special2.webp';
import image3 from '../assets/special3.webp';


function Specials() {
    return (
        <div className='specials1'>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "10%", fontWeight : "bold"}}><br/><br/><span>/ </span>Our specials<span> /</span></h1>
        <div className='specials'>
        <div className='spec1'>
            <img src = {image1}/>
            <h2><span>5% Off</span> any repair!</h2>
        </div>
        <div className='spec1'>
            <img src = {image2}/>
            <h2><span>15% Off</span> any brake repair!</h2>
        </div>
        <div className='spec1'>
            <img src = {image3}/>
            <h2><span>$24.99</span> Standard oil change!</h2>
        </div>
        </div>            
        </div>
    )
}

export default Specials
