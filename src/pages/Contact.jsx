import { Stack, Button, TextField } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import { contactApi } from '../services/allApi'


function Contact() {

  const [contact, setContact]= useState({
    username:"",
    email:"",
    number:"",
    comment:""
  })
  // console.log(contact);
  const handleContact = async()=>{
    const {username,email,number,comment} = contact
    if(!username || !email || !number || !comment){
      alert("Please fill the form completely")
    }
    else{
      const result = await contactApi(contact)
      if(result.status == 201){
        alert("We will contact you soon. Keep in touch with us")
      }
    }
  }

  //useeffect

  // useEffect(()=>{
  //   setContact()
  // })
  
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
            <TextField name='name' label='Name' style={{ width: '48%' }} onChange={(e)=>setContact({...contact,username:e.target.value})}/>
            <TextField name='email' label='Email' style={{ width: '48%' }} onChange={(e)=>setContact({...contact,email:e.target.value})} />
          </div>
          <div className='d-flex align-items-center justify-content-start mb-3'>
            <TextField name='phone' label='Phone Number' style={{ width: '100%' }} onChange={(e)=>setContact({...contact,number:e.target.value})} />
          </div>
          <div className='d-flex align-items-center justify-content-start mb-3'>
            <TextField
              name='comment'
              label='Comment'
              multiline
              rows={4}
              style={{ width: '100%' }}
              onChange={(e)=>setContact({...contact,comment:e.target.value})}
            />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
          <button className='btn  btn-danger' style={{ backgroundColor: "#76453f", color: "#fff" }} onClick={handleContact}>Connect</button>
          </div>
        </div>



      </Stack>





      <Footer />
    </>
  )
}

export default Contact
