import { Stack, Button, TextField } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'


function Contact() {
  return (
    <>
      <Header />
      <Stack
        sx={{
          width: '100%',
          height: "100vh",
          background: "linear-gradient(to top, #ba8d76, #eae2cf)",
          display: "flex",
          alignItems: "center",

        }}
      >
        <p style={{ color: "#76453f", paddingTop: "6%", fontSize: "50px" }}>C♡ntact Us</p>

        <div style={{width:"800px"}} >
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <TextField name='name' label='Name' style={{ width: '48%' }} />
            <TextField name='email' label='Email' style={{ width: '48%' }} />
          </div>
          <div className='d-flex align-items-center justify-content-start mb-3'>
            <TextField name='phone' label='Phone Number' style={{ width: '100%' }} />
          </div>
          <div className='d-flex align-items-center justify-content-start mb-3'>
            <TextField
              name='comment'
              label='Comment'
              multiline
              rows={4}
              style={{ width: '100%' }}
            />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
          <button className='btn  btn-danger' style={{ backgroundColor: "#76453f", color: "#fff" }}>Connect</button>
          </div>
        </div>



      </Stack>





      <Footer />
    </>
  )
}

export default Contact
