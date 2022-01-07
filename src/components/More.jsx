import React from 'react'
import './styles/More.css'
import image from '../assets/supra.jpg'

function More() {
    return (
        <div className='more'>
            <div className='img1' style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='text1'>
                tex1
            </div>
        </div>
    )
}

export default More
