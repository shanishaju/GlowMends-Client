import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import bggirl from '../assets/glowmendFemaleNoBg.png'
import { Col, Row } from 'react-bootstrap'
import { loginApi, registerApi } from '../services/allApi'

function Login({ register }) {

    const navigate = useNavigate()
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
            const result =  await registerApi(userDetails)
            console.log(result);
            if(result.status==200){
                alert('Registration successful')
                navigate('/login')
            }
        }
}
const handleLogin = async()=>{
    const {email,password} =userDetails
    if(!email || !password){
        alert("Please fill the fields compltely")
    }
    else{
     const  result = await loginApi({email,password})
     console.log(result);
     if(result.status == 200){
        alert("Login Successful")
        //store id in sesscion storage
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
         sessionStorage.setItem("toekn",result.data.token)
         //clearing
         setUserDetails({
            firstname:"",
            lastname:"",
            email:"",
            password:""
            

         })
         navigate('/')
     }
     else{
        alert(result.response.data) 
     }
    }
}

    return (
        <>
            <Row>
                <Col xs={12} md={2} sm={12}>
                    <img className='loginwomen' src={bggirl} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className=' loginfrom d-flex align-items-center justify-content-center  ' style={{ height: "90vh", }}>
                        <form action="" className='' style={{  width: "500px" }}>
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
                                    <button type='button' className='btn btn-danger mt-4 w-100' onClick={handleRegister}> Sign Up</button>
                                    <p className='mt-4 text-center'>already a use click here to <Link to={'/login'}>login</Link></p>
                                </div>
                                :
                                <div>
                                    <button type='button' className='btn btn-danger mt-4 w-100' onClick={handleLogin}> Sign In</button>
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
