import React from 'react'
import Navbar from '../components/Navbar'
import GalHome from '../components/GalHome'
import GalleryText from '../components/GalleryText'
import Footer from '../components/Footer'

function Gallery() {
    return (
        <div>
            <Navbar/>
            <GalHome/>
            <GalleryText/>
            <Footer/>
        </div>
    )
}

export default Gallery
