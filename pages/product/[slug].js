

import React from 'react'
import { client, urlFor } from '../../lib/client'
import { AllProductsDisplay, Product } from '../../components'
import { useStateContext } from '../../context/StateContext'


import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'
import AllProducts from '../AllProducts'


const ProDuctDetails = ({ product, products }) => {
    const { image, name, details, price, sizes } = product
    const [index, setIndex] = useState(0)
    const { decQty, incQty, qty, qtyProduct, totalQuantities, onAdd } = useStateContext()
    // console.log(products)
    return (
        <div>
            <div className='product-detail-container'>

                <img src={urlFor(image && image[index])}
                    className='product-detail-image'

                />

                <div className='product-detail-desc'>


                    <h1>{name}</h1>

                    <div className='reviews'>

                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />

                        </div>

                    </div>
                    <p className='price'>#{price}</p>
                    <small className='price' style={{ color: 'gray' }}>{sizes}</small>




                    {/* <div className='quantity'>
                        <h3>Quantity</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>


                        </p>
                    </div> */}

                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add To Cart</button>
                        {/* <button type='button' className='buy-now' onClick={setBuyNow(true)}>Buy Now</button> */}

                    </div>

                </div>

            </div>

            <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => (
                            <AllProductsDisplay key={item._id} product={item} />

                        ))}
                    </div>
                </div>
            </div>
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

    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)

    console.log(product)

    return {
        props: { product, products }
    }
}

export default ProDuctDetails
