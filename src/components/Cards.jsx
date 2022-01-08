import React from 'react';
import './styles/Cards.css';
import image1 from '../assets/res.webp';
import image2 from '../assets/tecnosti.webp';
import image3 from '../assets/klima.webp';

function Cards() {
    return (
        <div className='cards'>
            <div className='card2'>
                <img src={image1}/>
                <h2>Oil and oil filter service</h2>
            </div>
            <div className='card2'>
                <img src={image3}/>
                <h2>Air conditioning service</h2>
            </div>
            <div className='card2'>
                <img src={image2}/>
                <h2>Cooling system service</h2>
            </div>
        </div>
    )
}

export default Cards;
