import React from 'react';
import './styles/Cards.css';
import image1 from '../assets/res.webp';
import image2 from '../assets/tecnosti.webp';
import image3 from '../assets/klima.webp';

function Cards() {
    return (
        <div classname="cardss">
            <h1 style={{color : "#404040", textAlign : "center", marginTop : "15%", fontWeight : "bold"}}><span>/ </span>Services we offer<span> /</span></h1>
        <div className='cards'>
            <div className='card2'>
                <img src={image1}/>
                <h2>Oil and oil filter service</h2>
                <p>To maximize the protection of your vehicle,<br/> you should regularly change the oil and oil filter,<br/> at least every 3 months. <br/>Our auto technicians can easily help you.</p>
            </div>
            <div className='card2'>
                <img src={image3}/>
                <h2>Air conditioning service</h2>
                <p>To maximize the protection of your vehicle,<br/> you should regularly change the oil and oil filter,<br/> at least every 3 months. <br/>Our auto technicians can easily help you.</p>
            </div>
            <div className='card2'>
                <img src={image2}/>
                <h2>Cooling system service</h2>
                <p>To maximize the protection of your vehicle,<br/> you should regularly change the oil and oil filter,<br/> at least every 3 months. <br/>Our auto technicians can easily help you.</p>
            </div>
        </div>
        </div>
    )
}

export default Cards;
