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
        <Link to = '/' className='link'><img className='logo' src={logo} alt='logo'/></Link>    
            <ul>
                <li><Link to = '/' className='link'>Home</Link></li>
                <li><Link to = '/reservations' className='link'>Reservations</Link></li>
                <li><Link to = '/gallery' className='link'>Gallery</Link></li>
                <li><Link to = '/aboutus' className='link'>About us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
