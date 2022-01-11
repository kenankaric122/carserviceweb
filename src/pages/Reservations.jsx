import React from 'react'
import Navbar from '../components/Navbar';
import ResHome from '../components/ResHome';
import Form from '../components/Form';
import Footer from '../components/Footer';

function Reservations() {
    return (
        <div style={{backgroundColor : 'rgb(230,230,230)'}}>
            <Navbar/>
            <ResHome/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Reservations
