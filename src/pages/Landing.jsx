import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import More from '../components/More'
import Cards from '../components/Cards'

const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Cards/>
            <More/>
        </div>
    )
}

export default Landing
