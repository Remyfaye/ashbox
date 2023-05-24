

import { urlFor } from '@/lib/client'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

import React from 'react'

const Product = ({product}) => {
  const { decQty, incQty, qty, onAdd } = useStateContext()

  // console.log(slug.current)
  return (
    <div className='produc-container'>
          
          <Link href={`/product/${product.slug?.current}`}>
            <img 
            src={urlFor(product.image && product.image[0])}
            width={330}
            height={330}
            className='product-image'
            />
          </Link>

          <div className='product-details-container'>

            <div className='product-details-wrapper'>

            <p className='product-name'>
              {product.slug?.current}
            </p>
            <p className='product-price'>
              N{product.price}
            </p>

            </div>

            <button type='button' className='cart-icon2' onClick={() => onAdd(product,qty)}>
              <AiOutlineShopping fontSize={35} />
            </button>
            
            

          </div>

    </div>
  )
}

export default Product
