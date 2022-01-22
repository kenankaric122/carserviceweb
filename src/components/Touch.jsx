import React from 'react';
import './styles/Touch.css';
import { faAddressBook, faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Touch() {
return (
  <div classname="touch" style={{backgroundColor : "rgb(230, 230, 230)", textAlign : "center"}}>
  <br/><h1 style={{color : "#404040", textAlign : "center", marginTop : "0%", fontWeight : "bold", backgroundColor : "rgb(230, 230, 230)"}}><span>/ </span>GET IN TOUCH WITH US!<span> /</span></h1><br/>
  <p>Feel free to ask any Auto Repair Services questions over the phone, or get in touch via our contact form above. Your message will be dispatched directly to our staff who will answer as soon as they can.</p>
  <div className='test11'>
      <div className='card21'>
          <h2>OUR <span style={{color : '#ba382f'}}> LOCATION</span></h2><br/>
          <FontAwesomeIcon icon={faAddressCard} className='icons' color='#ba382f'/>  2222 New York, Central Park <br/><br/>
          <FontAwesomeIcon icon={faAddressCard} className='icons' color='#ba382f'/>  2222 New York, Central Park 1<br/>
      </div>
      <div className='card21'>
          <h2>PHONE <span style={{color : '#ba382f'}}> NUMBERS</span></h2><br/>
          <FontAwesomeIcon icon={faPhone} className='icons' color='#ba382f'/>  +85 8854 7875  <br/><br/>
          <FontAwesomeIcon icon={faPhone} className='icons' color='#ba382f'/>  +85 8874 1875  <br/>
      </div>
      <div className='card21'>
       <h2>EMAIL  <span style={{color : '#ba382f'}}> US</span></h2><br/>
       <FontAwesomeIcon icon={faMailBulk} className='icons' color='#ba382f'/>  gmail.com <br/><br/>
       <FontAwesomeIcon icon={faMailBulk} className='icons' color='#ba382f' />  gmail1.com <br/>
      </div>
  </div>
  </div>
)
}

export default Touch;
