import { faAddressBook, faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';
import logo from '../assets/logo.svg';


function Footer() {
    return (
        <div className='footer'>

            <div className='f1'>
            <br/><br/>
            <img src = {logo} className='logo' />
            </div>

            <div className='f1'>
            <br/><br/>
                <h1>Service </h1><br/>
                <button><Link to = '/aboutus' className='link'>Company</Link></button><br/>
                <button><Link to = '/reservations' className='link'>Contact us</Link></button><br/>
                <button>Our services</button><br/>
                <button>Careers</button>
            </div>

            <div className='f1'>
            <br/><br/>
                <h1>Quicklink</h1><br/>
                <button><Link to = '/' className='link'>Home</Link></button><br/>
                <button><Link to = '/reservations' className='link'>Contact us</Link></button><br/>
                <button><Link to = '/gallery' className='link'>Gallery</Link></button><br/>
                <button><Link to = '/aboutus' className='link'>About us</Link></button><br/>
            </div>

            <div className='f1'>
            <br/><br/>
                <h1>Support</h1><br/>
                <button><Link to = '/' className='link'>Blog</Link></button><br/>
                <button><Link to = '/reservations' className='link'>Contact</Link></button><br/>
                <button><Link to = '/' className='link'>Online support</Link></button><br/>
                <button><Link to = '/' className='link'>Money back</Link></button><br/>
            </div>

            <div className='f1'>
            <br/><br/>
                <h1>Informations</h1><br/>
            <FontAwesomeIcon icon={faAddressCard} className='icons'/>  2222 New York, Central Park <br/>
            <FontAwesomeIcon icon={faAddressCard} className='icons'/>  1200 USA  <br/>
            <FontAwesomeIcon icon={faMailBulk} className='icons'/>  gmail.com <br/>
            <FontAwesomeIcon icon={faPhone} className='icons'/>  +85 8854 7875  <br/>
            </div>
        </div>
    )
}

export default Footer
