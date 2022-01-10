import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './styles/Choose.css'

function Choose() {
    return (
        <div className='chs2'>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "10%", fontWeight : "bold", backgroundColor : "rgb(230, 230, 230)"}}><br/><br/><span>/ </span>Why choose us?<span> /</span></h1>
        <div className='choose'>
            <FontAwesomeIcon icon = {faHeart} size = '3x'></FontAwesomeIcon>
        </div>
        </div>
    )
}

export default Choose
