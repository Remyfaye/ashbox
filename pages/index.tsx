
// import React from 'react'
import { Product, FooterBanner, HeroBanner, Footer, MoreInfo } from '../components'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { client } from '../lib/client'
import AllProducts from './AllProducts';

const Index = ({ products, bannerData }: any) => {
  // console.log(products)
  return (
    <div>
      <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        <MoreInfo/>


        <div className='products-heading'>
          <h2>popular brands </h2>
          {/* <p>n ansbak jnskjwjwojk</p> */}
        </div>

        <div className='products-container'>
          {products?.slice(5, 10).map(
            (product: any) => <Product key={product._id} product={product} />
          )}
        </div>

        <div className='products-heading'>
          <h2>new arrivals  </h2>
          {/* <p>n ansbak jnskjwjwojk</p> */}
        </div>

        <div className='products-container'>
          {products?.slice(0, 5).map(
            (product: any) => <Product key={product._id} product={product} />
          )}
        </div>

        <div className='products-heading'>
          <h2>best sellers  </h2>
          {/* <p>n ansbak jnskjwjwojk</p> */}
        </div>

        <div className='products-container'>
          {products?.slice(25, 30).map(
            (product: any) => <Product key={product._id} product={product} />
          )}
        </div>

        <FooterBanner bannerData={bannerData && bannerData[0]} />

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


  return {
    props: { products, bannerData }
  }
}

export default Index
