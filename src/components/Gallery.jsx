import React from 'react';
import './styles/Gallery.css'
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

function Gallery() {
    return (
        <div className='gal'>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "15%", fontWeight : "bold"}}><br/><br/><span>/ </span>Gallery<span> /</span></h1>
        <div className='gallery'>
            <div className='slike1'>
            <img src = {image1}/>
            </div>
            <div className='slike1'>
            <img src = {image2}/>
            </div>
            <div className='slike1'>
            <img src = {image3}/>
            </div>
        </div>
        </div>
    )
}

export default Gallery
