import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import More from '../components/More'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'

const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Cards/>
            <More/>
            <Gallery/>
        </div>
    )
}

export default Landing
