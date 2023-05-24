
import AllProducts from '@/pages/AllProducts';
import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { Route, Routes, BrowserRouter } from 'react-router-dom';


const Context = createContext()
let foundProduct;
let index


const StateContext = ({ children }) => {

    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)
    const [qtyProduct, setQtyProduct] = useState(0)
    const [isAllProducts, setIsAllProducts] = useState(false)

    const initialRender = useRef(true);


    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('USER_CART'))
        const totalQty = JSON.parse(window.localStorage.getItem('TOTAL_QUANTITIES'))
        const totalPrice = JSON.parse(window.localStorage.getItem('TOTAL_PRICE'))
        console.log(totalQty)
        if (data !== null) setCartItems([...cartItems, ...data]);
        setTotalQuantities(totalQty);
        setTotalPrice(totalPrice);

        // const cartFromLocalStorage = JSON.parse(window.localStorage.getItem("CART_ITEMS") || "[]")

    }, [])

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        window.localStorage.setItem('USER_CART', JSON.stringify(cartItems))
        window.localStorage.setItem('TOTAL_QUANTITIES', JSON.stringify(totalQuantities))
        window.localStorage.setItem('TOTAL_PRICE', JSON.stringify(totalPrice))
        // window.localStorage.setItem('totalQty', JSON.stringify(totalQuantities))

    }, [cartItems])






    const incQty = () => {
        setQty((prevSetQty) => prevSetQty + 1)
        setProductPage(true)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1
            return prevQty - 1
        }
        )

    }

    const onAdd = (product) => {
        console.log(cartItems)
        // setQty((prevQty) => prevQty + 1)
        const checkProductInCart = cartItems?.find((item) => item?._id === product._id)



        // if (productPage) {
        //     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qtyProduct)
        //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qtyProduct)
        // }

        if (checkProductInCart) {
            // const updatedCartItems = cartItems.map((cartProduct) => {
            //     if (cartProduct?._id === product._id) return {
            //         // ...cartProduct,
            //         // quantity: cartProduct.quantity + qty
            //     }
            // })
            toast.success(`${product.name} already in the cart`)

            // setCartItems(updatedCartItems)
            // setQty(quantity + 1)
        } else {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qty)
            product.quantity = qty
            setCartItems([...cartItems, { ...product }])
            toast.success(`${qty} ${product.name} added to the cart`)
        }


        // setQty(1)


    }

    const toogleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item?._id === id)
        console.log(foundProduct)
        index = cartItems.findIndex((product) => product._id === id)
        const newCartItems = cartItems.filter((item) => item?._id !== id)

        if (value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(foundProduct => foundProduct + 1)
            // setQty(qty => foundProduct.quantity + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(foundProduct => foundProduct - 1)
                // setQty(qty => foundProduct.quantity + 1)

            }
        }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)
    }

    return (
        <div>
            <Context.Provider
                value={{
                    showCart,
                    cartItems,
                    totalPrice,
                    totalQuantities,
                    qty,
                    qtyProduct,
                    isAllProducts,
                    setIsAllProducts,
                    incQty,
                    decQty,
                    onAdd,
                    setShowCart,
                    toogleCartItemQuantity,
                    onRemove
                }}
            >
                {children}
            </Context.Provider>



        </div>

    )
}


export const useStateContext = () => useContext(Context)

export default StateContext
