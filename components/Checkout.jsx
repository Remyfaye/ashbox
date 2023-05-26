
import React, { useState, useRef,useEffect } from 'react'
import { PaystackButton } from "react-paystack"
import Contact from './Contact'
import emailjs from '@emailjs/browser';
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'




const Checkout = ({totalPrice, setShowCart,cartItems,itemId}) => {

    const publicKey = process.env.NEXT_PUBLIC_LIVE_PUBIC_KEY
    const newTotalPrice = totalPrice+3000
    const amount = newTotalPrice*100
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [enterAddress, setEnterAdress] = useState(true)
    // const [itemId, setItemId] = useState([])

    const form = useRef();

    // useEffect(() => {
    //   cartItems?.map( (item) => setItemId( (prevItemId) => [prevItemId , item.details] ) )
    // },[])
    
    // setCartId(cartItems.name)
    // console.log(cartId)


    const resetForm = () => {
      setEmail('');
      setName('');
      setPhone('');
      setShowCart(false)

    };

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey:publicKey,
        text: `Pay N${newTotalPrice}`,
        onSuccess: () =>
          resetForm(),
        onClose: () => alert("Wait! Don't leave :("),
    }

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dbfdb53', 'template_zy7197h',  form.current, 'LftTxcHyL3ufnB-GX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
        e.target.reset()

      setEnterAdress(false)

    };

  return (


  <div className="checkout">


      <button
        type='button'
        className='cart-heading'
        onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft/>
          <span className='heading'>exit</span>
      </button>

      <h1 className='checkout-heading'>Checkout</h1>

      {enterAddress ? 

      <div className="checkout-form">

      <form ref={form} onSubmit={sendEmail} className="checkout-field">

      <div className="checkout-field">
        <label>enter your email :</label>
        <input 
        name='email'
        required
        />
      </div>

      <div className="checkout-field">
        <label>type in the id of product(s) given below:</label>
        <input 
        name='name'
        required 
        placeholder={itemId}
        />
        <span>{itemId}</span>
      </div>

        <label>enter your address  : </label>
        <textarea 
        name='message'
        required
        />

      
      <button className='paystack-button' type='submit'>send</button>

      {/* <div className='checkout-help'>
      <h3 >need help making purchase? </h3>
            <span>contact this number :  
              <a href='https://wa.link/qapar4'> 07082471978</a>
              <a href='https://wa.link/qapar4'> Click here to chat with us on whatsapp </a>
              </span>
      </div> */}
    

      </form>



      </div>

      :

      <>

      <form className="checkout-form">

      <div className="checkout-field">
        <label>your Name</label>
        <input 
        type="text"
        id="name"
        required
        onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="checkout-field">
        <label>your Email</label>
        <input
            type="text"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>

      <div className="checkout-field">
        <label>your phone number</label>
        <input
            type="text"
            required
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
      </div>


      </form>

      

      <PaystackButton className="paystack-button" {...componentProps} />

      <div className='checkout-help'>
      <h3 >need help making purchase? </h3>
            {/* <span>click here to chat with us on whatsapp : */}
              <a href='https://wa.link/qapar4'> 
              Click here to chat with us on whatsapp </a>
               {/* </span> */}
      </div>

      {/* <script crossorigin src="..."></script> */}
      </>

      }


  </div>


  )
}



export default Checkout


