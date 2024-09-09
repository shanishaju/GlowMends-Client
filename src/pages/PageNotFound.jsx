import React from 'react'
import pnf from '../assets/404.gif'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div 
    style={{
      background: "linear-gradient(to top, #ba8d76, #eae2cf)",
      height:"100vh"
    }}
    >
      {/* <p className='text-center pt-5' style={{color:"#76453f",fontSize: "50px"}}>Page N♡t Found</p> */}

      <div 
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}>
      <img src={pnf} alt="" />
      <p style={{ color: '#76453f' }}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ fontSize: '1.2rem', color: '#76453f' }}>
        Go Back to Home
      </Link>
      </div>
    </div>
  )
}

export default PageNotFound
