

// import '../styles/contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineLeft } from 'react-icons/ai';

const Contact = ({setShowCart, totalPrice}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbfdb53', 'template_zy7197h',  form.current, 'LftTxcHyL3ufnB-GX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <div className='contact_container' id='contact'>
      <div className='contact_wrapper'>

        <div className='contact_top'>
        <button
        type='button'
        className='cart-heading'
        onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft/>
        </button>
            <span>
              
            <h3>fill in your details here</h3>
            <a href='https://wa.link/qapar4'>
              <i class="uil uil-whatsapp"></i>
            </a>
            </span>
            <div className='icons'></div>
            {/* <h4>fill in your details here</h4> */}
        </div>

        <div className='contact_bottom'>
            <form ref={form} onSubmit={sendEmail} >
                
                <input placeholder='name' name='name'/><br/>
                
                
                <input placeholder='email' name='email'/><br/>
                
                
                <textarea placeholder="address" name='message'></textarea><br/>

                  <div className='total'>
                  <h3>Subtotal:</h3>
                  <input placeholder='kk' name='email'/><br/>
                </div>
                
                <button className='resume_btn contact_btn' type='submit'>send</button>

                
               
                
            </form>

           
        </div>
      </div>
    </div>
  )
}

export default Contact
