import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles/GalleryText.css';

function GalleryText() {
    return (
        <div className='gallerytext' style={{textAlign : 'center'}}>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "10%", fontWeight : "bold"}}><span>/ </span><FontAwesomeIcon icon = {faTools} color='#ba382f'/>  Here you can see our work   <FontAwesomeIcon icon = {faTools} color='#ba382f'/><span> /</span></h1>
        <div className='textcontact'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        </div>
        </div>
    )
}

export default GalleryText
