import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import More from '../components/More'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'
import HomeContact from '../components/HomeContact'

const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Cards/>
            <More/>
            <Gallery/>
            <HomeContact/>
        </div>
    )
}

export default Landing
