



import { urlFor } from '@/lib/client'
import Link from 'next/link'
import {BiCartDownload} from 'react-icons/bi'
import {FcPaid} from 'react-icons/fc'
import {AiOutlineShopping} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

import React from 'react'

const AllProductsDisplay = ({product}) => {
  const { decQty, incQty, qty, onAdd } = useStateContext()

  // console.log(slug.current)
  return (
    <div className='all-product-container'>
          <Link href={`/product/${product.slug?.current}`}>
          
            <img 
            src={urlFor(product.image && product.image[0])}
            width={330}
            height={330}
            className='all-product-image'
            />
          </Link>

          <button type='button' className='all-cart-icon' onClick={() => onAdd(product,qty)}>
              {/* <FcPaid fontSize={35} /> */}
              <BiCartDownload fontSize={35} />
            </button>

          <div className='all-product-details'>

            <h4 className='all-product-name'>{product.name}</h4>
            <h4 className='all-product-price'> &#8358;{product.price}</h4>
            
            
          </div>

    </div>
  )
}

export default AllProductsDisplay
