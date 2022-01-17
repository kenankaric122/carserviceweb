import React from 'react';
import './styles/GalleryImg.css';
import img1 from '../assets/wallpaper.jpg';
import img2 from '../assets/supra.jpg';
import img3 from '../assets/f1.jpg';
import img4 from '../assets/f2.jpg';
import img5 from '../assets/f3.png';

function GalleryImg() {
  
    return (
        <div className='photo'>
            <div className='p1'>
            <img src = {img1}/>
            <img src = {img2}/>
            </div>
            <div className='p1'>
            <img src = {img3}/>
            <img src = {img4}/>
            </div>
            <div className='p1'>
            <img src = {img5}/>
            <img src = {img1}/>
            </div>
        </div>
    )
}

export default GalleryImg
