import { Box, Stack } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bannerImg from '../assets/About-banner.jpg'
import logo from '../assets/bglady-removebg-preview.png'
import girls from '../assets/girlsimg.png'
import grpserum from '../assets/grpserum.jpg'
import team1 from '../assets/teamone.jpg'
import team2 from '../assets/teamtwo.jpg'
import team3 from '../assets/teamfour.jpg'



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
                        background: "linear-gradient(to top, #eae2cf, #bd9079 )",
                        justifyContent: "center",
                        textAlign: "center"


                    }}>
                    <Stack
                        sx={{
                            width: "100%",
                            height: "200vh",
                            paddingLeft: "10%",
                            paddingRight: "10%",
                        }}>
                        <p style={{ color: "#76453f", fontSize: "40px", paddingTop: "70px" }}>
                            <span style={{ display: "block" }}>Harm♡nizing Nature and </span>
                            <span style={{ display: "block" }}>Inn♡vation for Radiant Skincare</span>
                        </p>

                        <Stack
                            sx={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "30px"
                            }}
                        >

                            <div style={{ width: "30%", height: "90%", borderRadius: "30%", borderLeft: "9px dotted #76453f", }} >
                                <img src={grpserum} alt="" style={{ width: "90%", height: "100%", borderRadius: "30%", paddingTop: "10px", paddingBottom: "10px" }} />

                            </div>

                            <Stack
                                sx={{
                                    width: "40%",
                                    marginLeft: "50px"

                                }}>
                                <p>At Gl♡w Mend, we believe in the perfect balance between the wisdom of nature and the advancements of science. Our products are meticulously crafted to bring out your skin's natural radiance, combining the finest natural ingredients with cutting-edge innovation. We are committed to delivering skincare that not only enhances your beauty but also nurtures your skin's health, ensuring you glow from within.

                                </p>
                            </Stack>
                        </Stack>

                    </Stack>


                </Stack>

                {/* section */}
                <Stack
                    sx={{
                        width: "100%",
                        height: "100vh",
                        background: "linear-gradient(to top, #c29983,#eae2cf )",


                    }}>
                    <p style={{
                        color: "#76453f", fontSize: "40px", justifyContent: "center",
                        textAlign: "center", marginTop: "5%"
                    }}>Say Hello to Our Team
                    </p>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color:"#76453f"

                        }}
                    >
                        <Stack
                            sx={{
                                width: "20%"
                                

                            }}
                        >
                            <img src={team1} alt="" style={{ width: "100%",  borderRadius:"20%"}} />
                            <p className='d-flex align-items-center justify-content-center mt-2'>Emma Grace Mitchell</p>
                            <p className='d-flex align-items-center justify-content-center '>Co-founder</p>

                        </Stack>
                        <Stack
                            sx={{
                                width: "20%",
                                marginLeft: "10px",
                                marginRight: "10px"


                            }}>
                            <img src={team2} alt="" style={{ width: "100%", borderRadius:"20%" }} />
                            <p className='d-flex align-items-center justify-content-center mt-2'>Sophia Marie Thompson</p>
                            <p className='d-flex align-items-center justify-content-center '>Co-founder</p>

                        </Stack>
                        <Stack
                            sx={{
                                width: "20%",
                            }}>
                            <img src={team3} alt="" style={{ width: "100%", height: "100%", borderRadius:"20%" }} />
                            <p className='d-flex align-items-center justify-content-center mt-2'>Agarika Roy</p>
                            <p className='d-flex align-items-center justify-content-center '>Co-founder</p>

                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
            <Footer />
        </>
    )
}

export default AboutUs
