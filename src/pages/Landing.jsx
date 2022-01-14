import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import More from '../components/More'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'
import HomeContact from '../components/HomeContact'
import Specials from '../components/Specials'
import Choose from '../components/Choose'
import Footer from '../components/Footer'
import Experience from '../components/Experience'

const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Cards/>    
            <Choose/>
            <More/>
            <Gallery/>
            <HomeContact/>
            <Experience/>
            <Specials/>
            <Footer/>
        </div>
    )
}

export default Landing
