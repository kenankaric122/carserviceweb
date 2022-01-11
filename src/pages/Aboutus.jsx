import React from 'react'
import Navbar from '../components/Navbar';
import AboutHome from '../components/AboutHome';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Works from '../components/Works';

function Aboutus() {
    return (
        <div>
            <Navbar/>
            <AboutHome/>
            <Clients/>
            <Works/>
            <Footer/>   
        </div>
    )
}

export default Aboutus
