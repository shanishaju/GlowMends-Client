import { Stack } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import img from '../assets/lipbalmforu.jpg'
import { Link } from 'react-router-dom'

function ProductDetails() {
    return (
        <>
            <Header />
            <Stack
                sx={{

                    width: "100%",
                    height: "100vh",
                    backgroundColor: "red",
                    background: "linear-gradient(to top, #ba8d76, #eae2cf)",

                }}>
                <p className="text-center" style={{ color: "#76453f", fontSize: "50px", marginTop: "30px" }}> Pr♡duct Details</p>

                <Stack className='container'
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: "50px",


                    }}>
                    <Stack
                        className=''
                        sx={{
                            alignItems: "start",
                            justifyContent: "center",
                            width: "40%",
                            paddingLeft: "100px",
                            '& img': {
                                transition: "transform 0.3s ease-in-out", // Smooth transition effect
                            },
                            '& img:hover': {
                                transform: "scale(1.1)" // Scale up the image on hover
                            }
                        }}
                    >
                        <img src={img} alt="" />
                    </Stack>
                    <Stack
                        className='card'
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "60%",
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#76453f",
                            '& p': {
                                opacity: 0, // Start with opacity 0 for the fade effect
                                animation: "fadeIn 2s ease-in-out forwards"
                            },
                            '& p:first-of-type': {
                                fontSize: "30px",
                                animation: "slideUp 1.5s ease-in-out forwards"
                            },
                            '@keyframes fadeIn': {
                                '0%': { opacity: 0 },
                                '100%': { opacity: 1 }
                            },
                            '@keyframes slideUp': {
                                '0%': { transform: "translateY(20px)", opacity: 0 },
                                '100%': { transform: "translateY(0)", opacity: 1 }
                            }
                        }}
                    >
                        <p>Lush Lips</p>
                        <p>Price: 5000</p>
                        <p>
                            Lush Lips is a luxurious lip balm that hydrates, softens, and leaves your lips with a silky smooth finish.  Lush Lips is a premium, all-natural lip balm designed to deliver intense hydration and softness. Infused with nourishing ingredients like shea butter, jojoba oil, and vitamin E, it creates a protective barrier to lock in moisture, preventing chapped and dry lips. The rich formula not only soothes and repairs but also enhances the natural beauty of your lips with a subtle, silky sheen.  Whether you're facing harsh weather or just want everyday hydration, Lush Lips provides the perfect balance of care and luxury, ensuring your lips stay smooth, supple, and irresistibly soft all day long. Its lightweight texture makes it ideal for layering under lipstick or wearing alone for a naturally radiant look.
                        </p>
                        <Link to={"/cart"} style={{textDecoration:"none"}}>
                            <Stack
                                sx={{
                                    width: "30%"
                                }}>
                                <button
                                    className=" pt-2 pb-2 ps-2 pe-2 mt-4 "
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid #76453f',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        transition: 'all .3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.125)';
                                        e.target.style.color = '#76453f';
                                        e.target.style.borderColor = '#76453f'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.color = '#76453f';
                                        e.target.style.borderColor = '#76453f';
                                    }}

                                >
                                    Cart
                                </button>
                            </Stack>
                        </Link>
                    </Stack>

                </Stack>

            </Stack>
            <Footer />

        </>
    )
}

export default ProductDetails
