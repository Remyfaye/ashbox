



import Link from 'next/link'
import React from 'react'
import {AiOutlineCar,AiOutlineDropbox} from 'react-icons/ai'
import {FcMoneyTransfer,FcAutomotive,FcAssistant,FcGlobe} from 'react-icons/fc'



import {urlFor} from '../lib/client'

const MoreInfo = () => {
  return (
    <div className='more-info-container'>

      <div className='more-info-desc'>

        <div className='more-info-icon'>
            <FcGlobe/>
        </div>
          
        <div className='more-info-desc-text'>
          <h3>nationwide delivery</h3><br></br>

          <h4>we offer fast delivery to anywhere in nigeria</h4>
          
        </div>

      </div>

      <div className='more-info-desc'>

        <div className='more-info-icon'>
            <FcAssistant/>
        </div>
          
        <div className='more-info-desc-text'>
          <h3>customer support</h3><br></br>

          <h4>you can contact us anytime of the day, any day of the week</h4>
          <small
          style={{
            fontWeight:'250',
            marginTop:'10px',
            color:'brown'
          }}
          >
          <a href='https://wa.link/qapar4'> 
              Click here to chat with us on whatsapp </a>
            </small>
           
          
        </div>

      </div>

      <div className='more-info-desc'>

        <div className='more-info-icon'>
            <FcAutomotive />
        </div>
          
        <div className='more-info-desc-text'>
          <h3>fast delivery</h3><br></br>

          <h4>Receive your purchase with 3 business days!!</h4>
          
        </div>

      </div>

      <div className='more-info-desc'>

        <div className='more-info-icon'>
            <FcMoneyTransfer/>
        </div>
          
        <div className='more-info-desc-text'>
          <h3>pay your way</h3><br></br>

          <h4>online payments with bank transfer and card payments available</h4>
          
        </div>

      </div>

    </div>
  )
}

export default MoreInfo
