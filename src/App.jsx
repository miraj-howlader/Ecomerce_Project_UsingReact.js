import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './pages/productList'
import ProductDetails from './pages/productDetails'
import CartList from './pages/cartList'

const App = () => {
  return (
    <div >
    
     <Routes>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartList/>}/>
      </Routes>
     
    </div>
  )
}

export default App
