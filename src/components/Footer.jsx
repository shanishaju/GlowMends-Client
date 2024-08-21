import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {

  return (

  <div className='footermind row w-100 mt-5 p-3 ' style={{backgroundColor:"#fafafa"}}>
        <div className="col-md-4 p-4 ms-md-5">
            <h4 className='' style={{color:"#5e5c5c"}}>GlowMend</h4>
            <p style={{textAlign:'justify'}}>GlowMend is India's first handcrafted customised 100% natural makeup brand, specifically for the Indian skin tone. Tinge products are paraben free, sulphate-free and cruelty-free. </p>
        </div>
        <div className="col-md-2 p-4 justify-content-center d-md-flex">
            <div>
                <p className='' style={{color:"#5e5c5c", fontSize:"20px"}}>Customer Service
                </p>
                <p className='mt-4'><Link to={'/'} style={{ textDecoration:"none"}}>Track Your Order</Link> </p>
                <p><Link to={'/project'} style={{ textDecoration:"none"}}>Shipping Policy</Link></p>
                <p><Link to={'/project'} style={{ textDecoration:"none"}}>Returns & Exchange</Link></p>
        

            </div>
        </div>
        <div className="col-md-2 p-4">
            <p className=''  style={{color:"#5e5c5c", fontSize:"20px"}}>Quick links
            </p>
            <p className='mt-4'>Blog
            </p>
            <p>About Us</p>
            <p>Contact Us</p>

        </div>
        <div className="col-md-3 p-4">
            <p className='' style={{color:"#5e5c5c", fontSize:"20px"}} >Contact us</p>
            <div className='d-flex mt-4'>
                <input type="text" className='form-control' placeholder='Email id' />
                <button className='btn btn-danger ms-3'>Subscribe</button>
            </div>
            <div className="d-flex mt-4 justify-content-between">  
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl'/>
            <FontAwesomeIcon icon={faTwitter} size='2xl'/>
            <FontAwesomeIcon icon={faLinkedin} size='2xl'/>       
            </div>
        </div>
        <div className='col-md-1'></div>
        <p className=' mt-4 d-flex align-items-center justify-content-center'>© 2024 GlowMend cosmetic privat limited.
        Marketed By shani</p>
    </div>
    
  )
}

export default Footer
