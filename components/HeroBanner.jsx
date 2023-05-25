

import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>


      <div className='hero-banner-desc'>

        <div className='hero-banner-image'>
        <img src={urlFor(heroBanner.image)} alt='hes' 
          // width={200}
          // height={200}
          // className='hero-banner-image'
          />

        </div>
          
        <div className='bannerr-desc'>

          <h3>{heroBanner.midText}</h3><br></br>
          {/* <h5>{heroBanner.smallText}</h5> */}

          <div>
            <Link href={`/allProducts/${heroBanner.buttonText}`}>
            <button type='button' >{heroBanner.buttonText}...</button>
            </Link>
           
        </div>
          
        </div>

        



      </div>

     


      
    </div>
  )
}

export default HeroBanner
