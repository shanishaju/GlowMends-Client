
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './home/Home'
import AllProducts from './pages/AllProducts'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import ProductDetails from './components/ProductDetails'
import TremsndConditions from './pages/TremsndConditions'
import PageNotFound from './pages/PageNotFound'
import Gifts from './pages/Gifts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login register />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/terms-of-service" element={<TremsndConditions/>} />
        <Route path="/gifts" element={<Gifts/>} />

        <Route path='*' element={<PageNotFound/>} />



      </Routes>
    </>
  )
}

export default App
