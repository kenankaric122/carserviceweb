import React from 'react'
import './styles/Navbar.css';
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <nav>
            <img className='logo' src={logo} alt='logo'/>
            <ul>
                <li>Home</li>
                <li>Reservations</li>
                <li>Gallery</li>
                <li>About us</li>
            </ul>
        </nav>
    )
}

export default Navbar
