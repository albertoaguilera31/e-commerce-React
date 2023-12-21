import { ShoppingCartProvider } from '../../Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckOutSideMenu'
import './App.css'

const AppRoutes =()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: "/men's clothing", element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: "/women's clothing", element: <Home/>},
    {path: '/jewelery', element: <Home/>},
    {path: '/others', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])

  return routes
}


const App = ()=>{
  const divStyle = {
    backgroundImage: 'url("../../imagenFondo/fondoecommerce.jpg")',
    backgroundSize: 'cover'
    // Otros estilos según tus necesidades
  };

  return (
   
  <div style={ divStyle }>
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutSideMenu/>
    </BrowserRouter>
   </ShoppingCartProvider> 
  </div>
  )
}

export default App
