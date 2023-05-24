


import React from 'react'
import {Product, FooterBanner, HeroBanner, Footer, Navbar} from '../components'
import {client} from '../lib/client'

const AllProducts = ({ products,bannerData}) => {
  // console.log(products)
  return (
    <div>
      <>

      <Navbar/>

      <div className='products-container'>
        {products?.map(
          (product ) => <Product key={product._id} product={product} />
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>

      </>
    </div>
  )
}

export const getServerSideProps = async () => {
  
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  console.log(products)


  return{
    props: {products, bannerData}
  }
}

export default AllProducts
