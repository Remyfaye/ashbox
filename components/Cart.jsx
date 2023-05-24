
import React, {useRef,useState} from 'react'
import { useStateContext } from '../context/StateContext'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link'
import { TiDeleteOutline } from 'react-icons/ti'
import { urlFor } from '@/lib/client'
  
import Contact from './Contact'
import Checkout from './Checkout'

const Cart = () => {
const { totalPrice,decQty,incQty, qty, cartItems,setShowCart, onRemove, totalQuantities,toogleCartItemQuantity } = useStateContext()
const [isPayment, setIsPayment] = useState(false)
const [isNotPayment, setIsNotPayment] = useState(true)
const [itemId, setItemId] = useState([])



// const paymentCondition = () => {
//   setIsPayment(true)
//   setIsNotPayment(false)

// }

  return (
    <div className='cart-wrapper'> 

    {
      !isPayment ?

      <div className='cart-container'>
        <button
        type='button'
        className='cart-heading'
        onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft/>
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items '>({totalQuantities} items)</span>
        </button>

        {cartItems?.length <1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3>You Have no items in cart</h3>
            <Link href='/'>
            <button
            className='btn'
            type='button'
            onClick={()=> setShowCart(false)}
            >
contine shopping
            </button>
            </Link>
          </div>
        )}


        <div className='cart-product-container'>
        {cartItems?.length >=1 && cartItems.map ( (item) => (

                <div className='product'>
                <img alt='dd' src={urlFor(item?.image[0])} className='cart-product-image'/>

                <div className='item-desc'>
                    <div className='flex top'>
              <h5>{item?.name}</h5>
              <h4>#{item?.price}</h4>
              

            </div>
            
            <span>
            <h5>product id:<span> {item?.details}</span></h5>
            </span>
        <div className='flex bottom'>
          <div >
            <p className='quantity-desc'>
              <span onClick={() => toogleCartItemQuantity(item?._id, 'dec')}><AiOutlineMinus/></span>
              <span>{item?.quantity}</span>
              <span onClick={() => toogleCartItemQuantity(item?._id, 'inc')}><AiOutlinePlus/></span>

            </p>
          </div>

          <button
          type='button'
          className='remove-item'
          onClick={() => onRemove(item)}
          >
            <TiDeleteOutline/>
          </button>
        </div>

        
                </div>
                </div>



          )

        )}
        </div>
     

         {cartItems.length >= 1  && (
          <>
            {isNotPayment &&
            <div className='cart-bottom'>
              
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>#{totalPrice}</h3>
            </div>

           <div className='btn-container'>
              <button type="button" className='btn' onClick={()=> 
               ( 
                setIsPayment(true),
                cartItems?.map( (item) => setItemId( (prevItemId) => [prevItemId + ' ' + item.details] ) )
               )
                }>
                proceed to payment
              </button>
            </div>
          </div>
}
          
          </>
        
        ) 
      }
       
      </div>
      :
      <div className='cart-container'>
      <Checkout totalPrice={totalPrice} setShowCart={setShowCart} cartItems={cartItems} itemId={itemId}/>
      </div>
    }
      
    </div>
  )
}

export default Cart
