

import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>


      <div className='hero-banner-desc'>

          {/* <div className='p'>
            <h1>{heroBanner.largeText1}</h1>
          </div> */}

          <div>

          <h3>{heroBanner.midText}</h3><br></br>
          {/* <h5>{heroBanner.smallText}</h5> */}
          
          </div>

        <div>
            <Link href={`/allProducts/${heroBanner.buttonText}`}>
            <button type='button' >{heroBanner.buttonText}...</button>
            </Link>
           
        </div>



      </div>

      <img src={urlFor(heroBanner.image)} alt='hes' className='hero-banner-image'/>


      
    </div>
  )
}

export default HeroBanner
