import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Stack } from '@mui/material'
import { allProductApi } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'

function AllProducts() {

  const [allProducts, setAllProducts] = useState([])
  //get products
  const getAllProducts = async () => {
    const result = await allProductApi()
    setAllProducts(result.data)


  }

  useEffect(() => {
    getAllProducts()
  }, []);


  return (
    <>
      <Header />
      <Stack
        sx={{
          background: "linear-gradient(to top, #ba8d76, #eae2cf)",
        }}>
        <p className="text-center" style={{ color: "#76453f", fontSize: "50px", }}> Pr♡ducts </p>
        <Stack className='container'
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginTop: "50px",
            padding: "10px"

          }}>
          <p
            style={{
              fontSize: '20px',

            }}
          >
            Sort by:
          </p>
          <select className="form-select" aria-label="Product selection" style={{
            width: '150px',
            fontSize: '20px',
            backgroundColor: 'transparent',

          }}>
            <option value="serum">Lipstick</option>
            <option value="oil">Oil</option>
            <option value="lipstick">serum</option>
            <option value="hair-care">Hair Care</option>
          </select>
        </Stack>
        <div className='container'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",

          }}
        >
          {allProducts?.length > 0 ?
            allProducts.map((item) => (
              <div
                className=" "
                style={{
                  width: "20%",
                  height: "400px",
                  backdropFilter: 'blur(16px) saturate(180%)',
                  backgroundColor: "#e5d9c5",
                  // filter: 'drop-shadow(0 30px 10px rgba(0,0,0,0.125))',
                  margin: "1%"
                }}
              >
                <div className="wrapper " style={{ width: "100%", height: "230%" }}>
                  <div >

                    <img src={`${serverUrl}/uploads/${item.productImage}`} alt="" style={{ width: "100%", height: "200px" }} />
                  </div>
                  <p
                    style={{
                      marginTop: "10px",
                      color: '#76453f',
                      // textTransform: 'uppercase',
                      fontSize: "25px",
                      paddingLeft: "5%"

                    }}
                  >
                    {item.productName}
                  </p>
                  <p
                    style={{
                      color: '#76453f',
                      fontSize: '0.8rem',
                      paddingLeft: "5%"

                    }}
                  >
                    ₹{item.price}

                  </p >
                  <p style={{
                    color: '#76453f',
                    fontSize: '0.8rem',
                    lineHeight: '150%',
                    paddingLeft: "5%"

                  }}>
                    {item.description.slice(0, 40)}{item.description.length > 100 ? "..." : ""}
                  </p>
                  <div className=" button    " style={{ textAlign: 'center' }}>
                    <button
                      className=" pt-2 pb-2 ps-5 pe-5  "
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
                      Shope Now
                    </button>

                  </div>
                </div>

              </div>
            ))
            : null}












        </div>


      </Stack>





      <Footer />
    </>
  )
}

export default AllProducts
