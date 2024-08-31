import { Box, Stack } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bannerImg from '../assets/About-banner.jpg'
import logo from '../assets/bglady-removebg-preview.png'
import girls from '../assets/girlsimg.png'
import dropping from '../assets/groopping-removebg-preview.png'


function AboutUs() {
    return (
        <>
            <Header />
            <Stack>
                {/* banner */}
                <Stack
                    sx={{
                        width: "100%",
                        height: "100vh",
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage: `url(${bannerImg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "86vh",
                            width: "100%",
                        }}

                    >
                        <Stack
                            sx={{
                                width: "100%",
                                height: "50vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <h1 style={{ color: "#76453f" }}>Nurture Y♡ur Skin, Naturally</h1>
                            <p style={{ color: "#76453f", fontSize: "20px" }}>
                                <span style={{ display: "block" }}>Unveil your natural glow with skincare products crafted from the earth's purest ingredients.</span>
                                <span style={{ display: "block" }}>Experience beauty the way nature intended.</span>
                            </p>

                        </Stack>
                        <Stack
                            sx={{
                                width: "100%",
                                height: "20vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}>
                            <img src={logo} alt="" />
                        </Stack>

                    </Box>
                </Stack>
                {/* banner end */}

                {/* next sec */}
                <Stack
                    sx={{
                        width: "100%",
                        height: "100vh",
                        marginTop: "-105px",
                        padding: "105px 200px 50px 80px",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        background: "linear-gradient(to top, #ba8d76, #eae2cf)"
                    }}
                >
                    <Stack className='container'
                        sx={{
                            width: "40%"
                        }}>
                        <p style={{ color: "#76453f", fontSize: "40px" }}>Our Missi♡n</p>
                        <p style={{ color: "#76453f" }}>To empower individuals to embrace their natural beauty through sustainable, ethically crafted skincare solutions that honor the earth and nurture the skin.</p>
                        <p style={{ color: "#76453f", fontSize: "40px" }}>Our Visi♡n</p>
                        <p style={{ color: "#76453f" }}>Our mission is to provide high-quality, natural skincare products that enhance wellness and radiance. We are dedicated to using pure, sustainably sourced ingredients while committing to ethical practices and innovation in every product we create. We strive to build a community that values natural beauty and holistic well-being.</p>
                    </Stack>
                    <Stack className='container'
                        sx={{
                            width: "30%",
                        }}>
                        <img className='  ' src={girls} alt="" style={{ width: "200%", borderBottom: "2px solid #76453f" }} />
                    </Stack>

                </Stack>

                {/* section */}
                <Stack
                    sx={{
                        width: "100%",
                        height: "100vh",
                        marginTop: "-100px",
                        padding: "105px 200px 50px 80px",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        background: "linear-gradient(to top, #eae2cf, #c29983 )",
                        justifyContent: "center", 
                        textAlign: "center" 


                    }}>
                    <Stack>
                        <p style={{ color: "#76453f", fontSize: "40px", }}>
                                <span style={{ display: "block" }}>Harm♡nizing Nature and </span>
                                <span style={{ display: "block" }}>Inn♡vation for Radiant Skincare</span>
                            </p>

                            <Stack>
                                <img src={dropping} alt="" />
                            </Stack>

                    </Stack>
                    

                </Stack>

            </Stack>
            <Footer />
        </>
    )
}

export default AboutUs
