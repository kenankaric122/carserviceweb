import React from 'react'
import Navbar from '../components/Navbar'
import GalHome from '../components/GalHome'
import GalleryText from '../components/GalleryText'
import Footer from '../components/Footer'
import GalleryImg from '../components/GalleryImg'

function Gallery() {
    return (
        <div>
            <Navbar/>
            <GalHome/>
            <GalleryText/>
            <GalleryImg/>
            <Footer/>
        </div>
    )
}

export default Gallery
