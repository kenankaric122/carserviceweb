import React from 'react';
import './styles/GalleryText.css';

function GalleryText() {
    return (
        <div className='gallerytext' style={{textAlign : 'center'}}>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "10%", fontWeight : "bold"}}><span>/ </span>Here you can see our work<span> /</span></h1>
        <div className='textcontact'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
        </div>
    )
}

export default GalleryText
