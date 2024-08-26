
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './home/Home'
import AllProducts from './pages/AllProducts'

function App() {

  return (
    <>
       <Routes>
          <Route path='/login' element= {<Login/> } />
          <Route path='/register' element= {<Login register/> } />
          <Route path='/' element= {<Home/> } />
          <Route path='/products' element={<AllProducts/>}/>


        </Routes> 
    </>
  )
}

export default App
