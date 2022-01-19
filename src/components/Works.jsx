import React from 'react';
import './styles/Works.css';
import image1 from '../assets/w1.jpg';
import image2 from '../assets/w2.jpg';
import image3 from '../assets/w3.jpg';
import image4 from '../assets/w4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCar, faCheckSquare, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';

function Works() {
    return (
        <div className='w1'>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "8%", fontWeight : "bold"}}><span>/ </span><FontAwesomeIcon icon = {faToolbox} color='#ba382f'/>  How it works  <FontAwesomeIcon icon = {faToolbox} color='#ba382f'/><span> /</span></h1>
        <div className='works'>
            <div className='card2'>
                <img src={image1}/>
                <h2><FontAwesomeIcon icon = {faCalendarCheck} color = '#ab0000'/>ㅤMake an appointment</h2>
            </div>
            <div className='card2'>
                <img src={image2}/>
                <h2><FontAwesomeIcon icon = {faTools} color = '#ab0000'/>ㅤSelect services</h2>
            </div>
            <div className='card2'>
                <img src={image3}/>
                <h2><FontAwesomeIcon icon = {faCheckSquare} color = '#ab0000'/>ㅤConfirm request</h2>
            </div>
            <div className='card2'>
                <img src={image4}/>
                <h2><FontAwesomeIcon icon = {faCar} color = '#ab0000'/>ㅤGet your car back</h2>
            </div>
        </div>
        </div>
    )
}

export default Works
