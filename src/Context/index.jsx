import { createContext, useState } from 'react'

export const ShoppingCartContext= createContext()

export const ShoppingCartProvider = ({children})=>{
    const [count, setCount] = useState(0)

    //Product details * pen/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)

    //Product details * show product
    const [productToShow, setProductToShow] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

