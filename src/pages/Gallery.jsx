import React from 'react'
import Navbar from '../components/Navbar'
import GalHome from '../components/GalHome'
import GalleryText from '../components/GalleryText'
import Footer from '../components/Footer'
import GalleryImg from '../components/GalleryImg'
import Footer1 from '../components/Footer1'

function Gallery() {
    return (
        <div style={{backgroundColor : 'rgb(220,220,220)'}}>
            <Navbar/>
            <GalHome/>
            <GalleryText/>
            <GalleryImg/>
            <Footer/>
            <Footer1/>
        </div>
    )
}

export default Gallery
