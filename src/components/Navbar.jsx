import React from 'react'
import { useState } from 'react';
import './styles/Navbar.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const[navbar, setNavbar] = useState(false);

    const changeBg = () => {
        if(window.scrollY >= 900){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBg);

    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <img className='logo' src={logo} alt='logo'/>
            <ul>
                <li><Link to = '/' className='link'>Home</Link></li>
                <li><Link to = '/kenao' className='link'>Reservations</Link></li>
                <li>Gallery</li>
                <li>About us</li>
            </ul>
        </nav>
    )
}

export default Navbar
