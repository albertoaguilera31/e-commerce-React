import { createContext, useState } from 'react'

export const ShoppingCartContext= createContext()

export const ShoppingCartProvider = ({children})=>{
    const [count, setCount] = useState(0)

    //Product details * open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)

    //Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false)


    //Product details * show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart * add products to shopping cart
    const [cartProducts, setCartProducts] = useState([])

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

