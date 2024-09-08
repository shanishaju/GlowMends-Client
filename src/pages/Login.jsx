import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import bggirl from '../assets/glowmendFemaleNoBg.png';
import { Col, Row } from 'react-bootstrap';
import { loginApi, registerApi } from '../services/allApi';

function Login({ register }) {
    const navigate = useNavigate();
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [userDetails, setUserDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    // Register function
    const handleRegister = async () => {
        const { firstname, lastname, email, password } = userDetails;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const errors = {};

        // Perform validation
        if (register) {
            if (!firstname) errors.firstname = "First name is required";
            if (!lastname) errors.lastname = "Last name is required";
        }
        if (!email) errors.email = "Email is required";
        else if (!emailRegex.test(email)) errors.email = "Email is invalid";

        if (!password) errors.password = "Password is required";

        // Set form errors
        setFormError(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const result = await registerApi(userDetails);
                if (result.status === 200) {
                    alert('Registration successful');
                    navigate('/login');
                }
            } catch (error) {
                alert('Registration failed: ' + error.message);
            }
        }
    };

    // Login function
    const handleLogin = async () => {
        const { email, password } = userDetails;
        if (!email || !password) {
            alert("Please fill the fields completely");
        } else {
            try {
                const result = await loginApi({ email, password });
                if (result.status === 200) {
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
                    sessionStorage.setItem("token", result.data.token);
                    setUserDetails({
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: ""
                    });
                    navigate('/');
                } else {
                    alert(result.response.data);
                }
            } catch (error) {
                alert('Login failed: ' + error.message);
            }
        }
    };

    // Submit handler for both forms
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);

        if (register) {
            handleRegister();
        } else {
            handleLogin();
        }
    };


    return (
        <>
            <Row>
                <Col xs={12} md={2} sm={12}>
                    <img className='loginwomen' src={bggirl} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='loginfrom d-flex align-items-center justify-content-center' style={{ height: "90vh" }}>
                        <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                            {register ? (
                                <h1 style={{ color: "grey" }} className='d-flex align-items-center justify-content-center mb-3'>Sign-up</h1>
                            ) : (
                                <h1 style={{ color: "grey" }} className='d-flex align-items-center justify-content-center mb-3'>Log-in</h1>
                            )}
                            <hr style={{ height: '5px', width: '50%', margin: '0 auto' }} />
                            {register && (
                                <div>
                                    <div className='mt-5 flex-colum d-flex'>
                                        <input
                                            className='p-3 w-100'
                                            type="text"
                                            placeholder='First Name'
                                            value={userDetails.firstname}
                                            onChange={(e) => setUserDetails({ ...userDetails, firstname: e.target.value })}
                                        />
                                    </div>
                                    <p className='text-danger'>{formError.firstname}</p>
                                    <div className='mt-5 flex-colum d-flex'>
                                        <input
                                            className='p-3 w-100'
                                            type="text"
                                            placeholder='Last Name'
                                            value={userDetails.lastname}
                                            onChange={(e) => setUserDetails({ ...userDetails, lastname: e.target.value })}
                                        />
                                    </div>
                                    <p className='text-danger'>{formError.lastname}</p>

                                </div>
                            )}
                            <div className='mt-5 flex-colum d-flex'>
                                <input
                                    className='p-3 w-100'
                                    type="text"
                                    placeholder='Email'
                                    value={userDetails.email}
                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                />
                            </div>
                            <p className='text-danger'>{formError.email}</p>

                            <div className='mt-4'>
                                <input
                                    className='p-3 w-100'
                                    type="password"
                                    placeholder='Password'
                                    value={userDetails.password}
                                    onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                                />
                            </div>
                            <p className='text-danger'>{formError.password}</p>

                            {register ? (
                                <div>
                                    <button type='submit' className='btn btn-danger mt-4 w-100' onClick={handleRegister}>Sign Up</button>
                                    <p className='mt-4 text-center'>Already a user? Click here to <Link to={'/login'}>login</Link></p>
                                </div>
                            ) : (
                                <div>
                                    <button type='submit' className='btn btn-danger mt-4 w-100' onClick={handleLogin}>Sign In</button>
                                    <p className='mt-4 text-center'>New user? Click here to <Link to={'/register'}>register</Link></p>
                                </div>
                            )}
                        </form>
                    </div>
                </Col>
                <Col xs={12} md={3}></Col>
            </Row>
            <Footer />
        </>
    );
}

export default Login;
