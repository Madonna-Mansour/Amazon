import React from 'react'
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'
import  {ProuductProvider }  from './product/ProductContext'
import ProductDetails from './product/ProductDetails'
import ProductList from './product/ProductList'
import Cart from './componants/Cart'
import Navv from './componants/Navv'
import Login from './pages/Login'
import Register from './pages/Register'
import ChecOut from './pages/ChecOut'
import AuthDetails from './product/AuthDetails'
import Footer from './componants/Footer'
import Home from './pages/Home'


const App = () => {
  return ( 
    <div className="">
              <BrowserRouter >
        <Navv />
      <ProuductProvider>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/Home' element={< Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ChecOut' element={<ChecOut />} />
          <Route path='/AuthDetails' element={<AuthDetails />} />
        </Routes>
      </ProuductProvider>
      {/* <Footer /> */}
    </BrowserRouter>
    </div>

    
  )
}

export default App