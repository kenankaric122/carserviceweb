import { faMale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles/Testimonials.css';

function Testimonials() {
    return (
        <div classname="testimonials" style={{backgroundColor : "rgb(230, 230, 230)"}}>
        <br/><h1 style={{color : "#404040", textAlign : "center", marginTop : "5%", fontWeight : "bold", backgroundColor : "rgb(230, 230, 230)"}}><span>/ </span>What our clients say!<span> /</span></h1>
        <div className='test1'>
            <div className='card2'>
                <FontAwesomeIcon icon = {faMale} size = '6x' color='#ba382f'/>
                <p>To maximize the protection of your vehicle,<br/> you should regularly change the oil and oil filter,<br/> at least every 3 months. Our auto <br/>technicians can easily help you.</p>
                <h2>Kenan Karić</h2>
                <p style={{color: "#ba382f", fontStyle : "italic", fontSize : "13px", marginTop : "-1%"}}>09 November, 2021</p>
            </div>
            <div className='card2'>
                <FontAwesomeIcon icon = {faMale} size = '6x' color='#ba382f'/>
                <p>To maximize the protection of your vehicle,<br/> you should regularly change the oil and oil filter,<br/> at least every 3 months. Our auto <br/>technicians can easily help you.</p>
                <h2>Kenan Karić</h2>
                <p style={{color: "#ba382f", fontStyle : "italic", fontSize : "13px", marginTop : "-1%"}}>09 November, 2021</p>
            </div>
            <div className='card2'>
             <FontAwesomeIcon icon = {faMale} size = '6x' color='#ba382f'/>
             <p>To maximize the protection of your vehicle,<br/> you should regularly change the oil and oil filter,<br/> at least every 3 months. Our auto <br/>technicians can easily help you.</p>
             <h2>Kenan Karić</h2>
             <p style={{color: "#ba382f", fontStyle : "italic", fontSize : "13px", marginTop : "-1%"}}>09 November, 2021</p>
            </div>
        </div>
        </div>
    )
}

export default Testimonials
