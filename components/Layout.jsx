

import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AllProducts from '../pages/AllProducts'

import { useStateContext } from '../context/StateContext'

import Checkout from './Checkout'

const Layout = ({children}) => {
  const {isAllProducts,incQty, qty } = useStateContext()
  return (
    <div className='layout'>
      <Head>
        <title>ashbox</title>
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className='main-container'>
        {children}
      </main>

      

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
