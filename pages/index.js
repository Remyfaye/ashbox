
// import React from 'react'
import { Product, FooterBanner, HeroBanner, Footer, MoreInfo, AllProductsDisplay } from '../components'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { client } from '../lib/client'
import { urlFor } from '@/lib/client'
import AllProducts from './AllProducts';
import Link from 'next/link';

const Index = ({ products, bannerData }) => {
  // console.log(products)
  return (
    <div>
      <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        <MoreInfo />

        <div className='products-heading'>
          <h2>new arrivals  </h2>
          {/* <p>n ansbak jnskjwjwojk</p> */}
        </div>

        <div className='maylike-products-wrapperr'>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {products.map((item) => (
                <AllProductsDisplay key={item._id} product={item} />

              ))}
            </div>
          </div>
        </div>


        <div className='products-heading'>
          <h2> </h2>
          {/* <p>n ansbak jnskjwjwojk</p> */}
        </div>

        <div className='products-container'>

          <div className='produc-container'>
            <Link href={`/allProducts/explore`}>
              <img
                src={urlFor(bannerData[0].bannerImage)}
                width={330}
                height={330}
                className='product-image'
              />
            </Link>

            <div className='new-product-details'>
              <h1>best quality shoes</h1>
              <p>shop now</p>
            </div>
            {/* <Product key={product._id} product={product} /> */}
          </div>
        </div>


        <div className='products-heading'>
          <h2>best sellers  </h2>
          {/* <p>n ansbak jnskjwjwojk</p> */}
        </div>

        <div className='products-container'>
          {products?.slice(40, 45).map(
            (product) => <Product key={product._id} product={product} />
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
