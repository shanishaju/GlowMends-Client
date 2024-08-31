
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './home/Home'
import AllProducts from './pages/AllProducts'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
       <Routes>
          <Route path='/login' element= {<Login/> } />
          <Route path='/register' element= {<Login register/> } />
          <Route path='/' element= {<Home/> } />
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>


        </Routes> 
    </>
  )
}

export default App
