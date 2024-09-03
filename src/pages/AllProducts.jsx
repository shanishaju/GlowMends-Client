import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Stack } from '@mui/material'
import img1 from '../assets/serum2.jpg'

function AllProducts() {


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

          }}
        >
          <div
            className=" text-center"
            style={{
              width: "20%",
              height: "400px",
              backdropFilter: 'blur(16px) saturate(180%)',
              backgroundColor: 'rgba(17, 25, 40, 0.25)',
              filter: 'drop-shadow(0 30px 10px rgba(0,0,0,0.125))',
              margin: "2%"
            }}
          >
            <div className="wrapper " style={{ width: "100%", height: "230%" }}>
              <div>
                <img src={img1} alt="" style={{ width: "100%", height: "200px" }} />
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.98)',
                  // textTransform: 'uppercase',
                  fontSize:"30px"
                }}
              >
                Lemon Oil
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '0.8rem',
                  lineHeight: '150%',
                  letterSpacing: '2px',
                }}
              >
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
            <div className="button m-3 d-flex   ">
              <button
                className=" btn outline me-4"
                style={{
                  background: 'transparent',
                  border: '1px solid #76453f',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                }}
                onMouseEnter={(e) => {
                  // e.target.style.transform = 'scale(1.125)';
                  e.target.style.color = '#76453f';
                  e.target.style.borderColor = '#76453f'
                }}
                onMouseLeave={(e) => {
                  // e.target.style.transform = 'scale(1)';
                  e.target.style.color = '#76453f';
                  e.target.style.borderColor = '#76453f';
                }}
              >
                More
              </button>
              <button
                className=" btn outline"
                style={{
                  background: 'transparent',
                  border: '1px solid #76453f',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                }}
                onMouseEnter={(e) => {
                  // e.target.style.transform = 'scale(1.125)';
                  e.target.style.color = '#76453f';
                  e.target.style.borderColor = '#76453f'
                }}
                onMouseLeave={(e) => {
                  // e.target.style.transform = 'scale(1)';
                  e.target.style.color = '#76453f';
                  e.target.style.borderColor = '#76453f';
                }}
              >
                Cart
              </button>
            </div>
            </div>

          </div>









          


        </div>
        

      </Stack>





      <Footer />
    </>
  )
}

export default AllProducts
