import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import More from '../components/More'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'
import HomeContact from '../components/HomeContact'
import Specials from '../components/Specials'
import Choose from '../components/Choose'

const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Choose/>
            <Cards/>
            <More/>
            <Gallery/>
            <HomeContact/>
            <Specials/>
        </div>
    )
}

export default Landing
