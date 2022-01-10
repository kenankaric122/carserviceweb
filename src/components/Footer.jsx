import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';


function Footer() {
    return (
        <div className='footer'>

            <div className='f1'>
            <br/><br/>
                <h1>Information</h1><br/>
                <button><Link to = '/aboutus' className='link'>Our company</Link></button><br/>
                <button><Link to = '/reservations' className='link'>Contact us</Link></button><br/>
                <button>Our services</button><br/>
                <button>Careers</button>
            </div>
            <div className='f1'>
            <br/><br/>
                <h1>Quicklink</h1>
                <button><Link to = '/' className='link'>Home</Link></button><br/>
                <button><Link to = '/reservations' className='link'>Reservations</Link></button><br/>
                <button><Link to = '/gallery' className='link'>Gallery</Link></button><br/>
                <button><Link to = '/aboutus' className='link'>About us</Link></button><br/>
            </div>
            <div className='f1'>
            <br/><br/>
                <h1>Support</h1>
                <p>transff</p>
            </div>
            <div className='f1'>
            <br/><br/>
                <h1>Store information</h1>
                <p>transff</p>
            </div>
        </div>
    )
}

export default Footer
