import React from 'react'
import './styles/More.css'
import image from '../assets/supra.jpg'

function More() {
    return (
        <div className='more1'>
            <h1 style={{color : "#404040", textAlign : "center", marginTop : "15%", fontWeight : "bold"}}><span>/ </span>About car services<span> /</span></h1>
        <div className='more'>
            <div className='img1'></div>
            <div className='text1'>
            A car service is a health check with routine maintenance for your vehicle which assesses everything from your engine’s fluid levels to the general wear and tear of your car. 
            A service is usually undertaken by a mechanic and the most in-depth of them involve around 50 or more system and component checks, adjustments and parts replacement.
            </div>
        </div>
        </div>
    )
}

export default More
