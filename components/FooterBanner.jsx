
import { urlFor } from '@/lib/client'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({bannerData:{
  phone, bottomText, largeText2, email, smallText, midText, 
  product, buttonText, image
}}) => {

  const { setIsAllProducts,isAllProducts,incQty, qty } = useStateContext()

  return (
    <div className='footer-banner-container'>

      <div className='banner-desc'>

         
        <div className='banner-desc-heading'> 
          <h2>About Us </h2>
          <h3>{bottomText}</h3>
        </div>

        <div className='banner-desc-heading'> 
          <h2>Contact Us </h2>
          <h3>phone : {phone}</h3>
          <h3>email : {email}</h3>
          {/* <span>phone : {phone}</span> */}

        </div>

        <div className='right'>
        
            <Link href={`/allProducts/${buttonText}`}>
              <button type='button'>{buttonText}</button>
            </Link>

        </div>
        

      </div>
    </div>
  )
}

export default FooterBanner
