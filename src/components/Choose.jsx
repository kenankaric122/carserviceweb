import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faChair, faHeart, faIdBadge, faOilCan, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import './styles/Choose.css'

function Choose() {
    return (
        <div className='chs2'>
        <h1 style={{color : "#404040", textAlign : "center", marginTop : "10%", fontWeight : "bold", backgroundColor : "rgb(230, 230, 230)"}}><br/><br/><span>/ </span>Why choose us?<span> /</span></h1>
        <p style={{color : "404040", textAlign : "center", marginLeft : "10%", marginRight : "10%"}}>We are a family-owned business that has been serving the local community since 1990. We always strive for the highest quality, honest and friendly service, and do our best to help you as quickly as possible.</p>
        <div className='choose'>
            <div className='icons'>
            <FontAwesomeIcon icon = {faHeart} size = '3x' color='#ba382f'></FontAwesomeIcon>
            </div>
            <div className='icons'>
            <FontAwesomeIcon icon = {faIdBadge} size = '3x' color='#ba382f'></FontAwesomeIcon>
            </div>
            <div className='icons'>
            <FontAwesomeIcon icon = {faChair} size = '3x' color='#ba382f'></FontAwesomeIcon>
            </div>
        </div>

        <div className='choose1'>
            <div className='icons'>
            <FontAwesomeIcon icon = {faCertificate} size = '3x' color='#ba382f'></FontAwesomeIcon>
            </div>
            <div className='icons'>
            <FontAwesomeIcon icon = {faOilCan} size = '3x' color='#ba382f'></FontAwesomeIcon>
            </div>
            <div className='icons'>
            <FontAwesomeIcon icon = {faPeopleArrows} size = '3x' color='#ba382f'></FontAwesomeIcon>
        </div>


        </div>
        </div>
    )
}

export default Choose
