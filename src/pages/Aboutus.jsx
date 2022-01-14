import React from 'react'
import Navbar from '../components/Navbar';
import AboutHome from '../components/AboutHome';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Works from '../components/Works';
import HomeContact from '../components/HomeContact';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';

function Aboutus() {
    return (
        <div>
            <Navbar/>
            <AboutHome/>
            <Clients/>
            <Works/>
            <HomeContact/>
            <Experience/>
            <Testimonials/>
            <Location/>
            <Footer/>   
        </div>
    )
}

export default Aboutus
