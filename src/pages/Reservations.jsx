import React from 'react'
import Navbar from '../components/Navbar';
import ResHome from '../components/ResHome';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Location from '../components/Location';
import Touch from '../components/Touch';
import Footer1 from '../components/Footer1';

function Reservations() {
    return (
        <div style={{backgroundColor : 'rgb(230,230,230)'}}>
            <Navbar/>
            <ResHome/>
            <Form/>
            <Touch/>
            <Location/>
            <Footer/>
            <Footer1/>
        </div>
    )
}

export default Reservations
