import { Layout } from '@/components'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useNavigate } from 'react-router-dom';

import  StateContext  from '../context/StateContext'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AllProducts from './AllProducts';



export default function App({ Component, pageProps }: AppProps) {
  return(
    <StateContext>
  <Layout>
    <Toaster/>
   <Component {...pageProps} />

    </Layout>
    </StateContext>
  
  )
}
