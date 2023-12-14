import { createContext, useState, useEffect } from 'react'

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

    //Shopping Cart * order
    const [order, setOrder]= useState([])

    //get products
    const [items, setItems] = useState(null);

    const [filteredItems, setFilteredItems] = useState(null);

    //get products by titles
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=>response.json())
        .then(data=>setItems(data))
      }, [])

      const filteredItemsByTitle =(items, searchByTitle)=>{
        return items?.filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(()=>{
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items, searchByTitle])
      

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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

