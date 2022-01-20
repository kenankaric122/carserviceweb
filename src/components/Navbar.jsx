import React from 'react'
import { useState } from 'react';
import './styles/Navbar.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBars, faHome, faIdBadge, faImage } from '@fortawesome/free-solid-svg-icons';

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

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    window.addEventListener('scroll', changeBg);

    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to = '/' className='link'><img className='logo' src={logo} alt='logo'/></Link>    
            <ul>
                <li><Link to = '/' className='link'><FontAwesomeIcon icon = {faHome}/>ㅤHome</Link></li>
                <li><Link to = '/reservations' className='link'><FontAwesomeIcon icon = {faIdBadge}/>ㅤContact us</Link></li>
                <li><Link to = '/gallery' className='link'><FontAwesomeIcon icon = {faImage}/>ㅤGallery</Link></li>
                <li><Link to = '/aboutus' className='link'><FontAwesomeIcon icon = {faAddressCard}/>ㅤAbout us</Link></li>
            </ul>
        <FontAwesomeIcon icon = {faBars} className='menu' onClick={handleClick}/>
        </nav>
    )
}

export default Navbar
