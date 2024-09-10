import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import img from '../assets/lipbalmforu.jpg'
import { addToCartApi, getSingleProductApi } from '../services/allApi'
import { useParams } from 'react-router-dom'

function ProductDetails() {

     //Use const { id } = useParams(); to extract URL parameters in a React component.
    const { slug } = useParams(); 
    console.log(slug);
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await getSingleProductApi(slug); 
            if (response.status === 200) {
              setProduct(response.data); 
            } else {
              setError('Product not found');
            }
          } catch (error) {
            setError('Error fetching product');
          }
        };
    
        fetchProduct(); 
      }, [slug]);

    

   
    // const handleAddToCart = async ( productId, quantity = 1) => {
    //     const user = JSON.parse(sessionStorage.getItem("existingUser"));
    //     const userId = user ? user._id : null; 
    //     const reqBody = { userId, productId, quantity };
        
    //     const reqHeader = {
    //         'Content-Type': 'application/json',
    //     };
    //     console.log( userId,"user Id" );
    //     console.log( productId,"product Id");
    //     console.log( quantity,"quantity");

    //   try {
    //         const result = await addToCartApi(reqBody, reqHeader);
    
    //         if (result.status === 200) {
    //             alert("Product added to cart");
    //         } else {
    //             console.error("Error response from API:", result);
    //             alert("Error adding product to cart");
    //         }
    //     } catch (error) {
    //         console.error("Error in handleAddToCart:", error);
    //         alert("Failed to add product to cart");
    //     }
    // };
    
    
    return (
        <>
            <Stack
                sx={{

                    width: "100%",
                    height: "120vh",
                    backgroundColor: "red",
                    background: "linear-gradient(to top, #ba8d76, #eae2cf)",
                    

                }}>
                                <Header />
         
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
                                opacity: 0,
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
                        {product ? (
                            <div>
                        <p>{product.productName}</p>
                        
    <p>$ {product.price}</p>
    <p>{product.description}</p>
    </div>
) : (
  <p>Loading...</p>
)}
                     
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

                                    // onClick={handleAddToCart()}

                                >
                                    Cart
                                </button>
                            </Stack>
                    </Stack>

                </Stack>

            </Stack>
            <Footer />

        </>
    )
}

export default ProductDetails
