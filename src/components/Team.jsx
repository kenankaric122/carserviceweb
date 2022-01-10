import React from 'react';
import './styles/Team.css';
import image1 from '../assets/audi.png';

function Team() {
    return (
        <div className='team'>
        <div className='team1'>
            <div className='slike1'>
            <img src = {image1}/>
            </div>
            <div className='slike1'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
        </div>
        </div>
    )
}

export default Team
