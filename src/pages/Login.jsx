import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import bgcolor from '../assets/glowmendFemaleNoBg.png'
import { Col, Row } from 'react-bootstrap'

function Login({ register }) {

    return (
        <>
       <Row>
       <Col xs={12} md={3}>
       <img style={{marginLeft:"70px", marginTop:"100px",width:"200%"}} src={bgcolor} alt="" />

       </Col>
       <Col xs={12} md={6}>
       <div className='d-flex align-items-center justify-content-center  ' style={{height:"90vh", }}>
                <form action="" className='' style={{ marginTop: "100px", width: "500px" }}>
                    {register ?
                        <h1 style={{ color: "grey" }} className='d-flex align-items-center justify-content-center mb-3'>Sign-up </h1>
                        : <h1 style={{ color: "grey" }} className='d-flex align-items-center justify-content-center mb-3'>Log-in </h1>
                    }

                    <hr style={{ height: '5px', width: '50%', margin: '0 auto' }} />
                    {register && <div>
                        <div className='mt-5 flex-colum d-flex'>
                            <input className='p-3 w-100' type="text" placeholder='First Name' />
                        </div>
                        <div className='mt-5 flex-colum d-flex'>
                            <input className='p-3 w-100' type="text" placeholder='Last Name' />
                        </div>
                    </div>}

                    <div className='mt-5 flex-colum d-flex'>
                        <input className='p-3 w-100' type="text" placeholder='Email' />
                    </div>
                    <div className='mt-4'>
                        <input className='p-3 w-100' type="text" placeholder='Password' />
                    </div>
                    {register ?
                        <button className='btn btn-danger mt-4 w-100'> Sign UP</button> :
                        <button className='btn btn-danger mt-4 w-100'> Sign In</button>
                    }

                    <div className="d-flex justify-content-center">
{   register?                      <Link style={{ textDecoration: "none" }}>
                            <p className="mt-4 mb-3 mx-2">Sign in</p>
                        </Link>
                        :
                         <div>
                             <Link style={{ textDecoration: "none" }}>
                            <p className="mt-4 mb-3 mx-2">Forgot your password?</p>
                        </Link>
                        {/* <Link style={{ textDecoration: "none" }}>
                            <p className="mt-4 mb-3 mx-2">Sign up</p>
                        </Link> */}
                         </div> }

                    </div>
                </form>


       </div>
       </Col>
       <Col xs={12} md={3}>
       </Col>
       </Row>


        <Footer/>
        </>
    )
}

export default Login
