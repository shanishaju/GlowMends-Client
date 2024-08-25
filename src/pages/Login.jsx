import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import bgcolor from '../assets/glowmendFemaleNoBg.png'
import { Col, Row } from 'react-bootstrap'
import { registerApi } from '../services/allApi'

function Login({ register }) {

    const [userDetails,setUserDetails] = useState({

        firstname:"",
        lastname:"",
        email:"",
        password:""

    })
    console.log(userDetails);
    
const handleRegister =async()=>{

    const {firstname,lastname,email,password} = userDetails
        if(!firstname || !lastname || !email || !password){
            alert(" Please fill the form completely")
        }
        else{
            const result =   await registerApi(userDetails)
            console.log(result);
        }
}

    return (
        <>
            <Row>
                <Col xs={12} md={3}>
                    <img style={{ marginLeft: "70px", marginTop: "100px", width: "200%" }} src={bgcolor} alt="" />

                </Col>
                <Col xs={12} md={6}>
                    <div className='d-flex align-items-center justify-content-center  ' style={{ height: "90vh", }}>
                        <form action="" className='' style={{ marginTop: "100px", width: "500px" }}>
                            {register ?
                                <h1 style={{ color: "grey" }} className='d-flex align-items-center justify-content-center mb-3'>Sign-up </h1>
                                : <h1 style={{ color: "grey" }} className='d-flex align-items-center justify-content-center mb-3'>Log-in </h1>
                            }

                            <hr style={{ height: '5px', width: '50%', margin: '0 auto' }} />
                            {register && <div>
                                <div className='mt-5 flex-colum d-flex'>
                                    <input className='p-3 w-100' type="text" placeholder='First Name' onChange={(e)=>setUserDetails({
                                        ...userDetails, firstname:e.target.value
                                    })}  />
                                </div>
                                <div className='mt-5 flex-colum d-flex'>
                                    <input className='p-3 w-100' type="text" placeholder='Last Name' onChange={(e)=>setUserDetails({
                                        ...userDetails, lastname:e.target.value
                                    })}  />
                                </div>
                            </div>}

                            <div className='mt-5 flex-colum d-flex'>
                                <input className='p-3 w-100' type="text" placeholder='Email' onChange={(e)=>setUserDetails({
                                        ...userDetails, email:e.target.value
                                    })}  />
                            </div>
                            <div className='mt-4'>
                                <input className='p-3 w-100' type="text" placeholder='Password' onChange={(e)=>setUserDetails({
                                        ...userDetails, password:e.target.value
                                    })}  />
                            </div>
                            {register ?
                                <div>
                                    <button className='btn btn-danger mt-4 w-100' onClick={handleRegister}> Sign Up</button>
                                    <p className='mt-4 text-center'>already a use click here to <Link to={'/login'}>login</Link></p>
                                </div>
                                :
                                <div>
                                    <button className='btn btn-danger mt-4 w-100'> Sign In</button>
                                    <p className='mt-4 text-center'>New user click here to  <Link to={'/register'}>register</Link></p>
                                </div>
                            }

                        </form>


                    </div>
                </Col>
                <Col xs={12} md={3}>
                </Col>
            </Row>


            <Footer />
        </>
    )
}

export default Login
