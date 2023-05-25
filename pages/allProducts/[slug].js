



import React from 'react'
import { client, urlFor } from '../../lib/client'
import { FooterBanner, Navbar, Product } from '../../components'
import { useStateContext } from '../../context/StateContext'


import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'
import AllProductsDisplay from '../../components/AllProductsDisplay'


const AllProducts = ({ products, bannerData }) => {
    // console.log(products)
    return (
        <div>
            <>


                <div className='products-container'>
                    {products?.map(
                        (product) => <AllProductsDisplay key={product._id} product={product} />
                    )}
                </div>

                <FooterBanner bannerData={bannerData && bannerData[0]} />



            </>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }`

    const products = await client.fetch(query)

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps = async ({ params: { slug } }) => {

    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productsQuery = '*[_type == "product" ]'

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery)

    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)

    console.log(product)

    return {
        props: { bannerData, products }
    }
}

export default AllProducts
