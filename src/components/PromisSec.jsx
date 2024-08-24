import React from 'react'
import { Col, Row } from 'react-bootstrap'
import crueltyfree from '../assets/cruelty-free.avif'
import sulphate from '../assets/sulphate-free.avif'
import allskin from '../assets/for-all-skin.avif'
import noharsh from '../assets/no-harsh.avif'



function PromisSec() {

  return (
    <>
    <div className='text-center pb-5 ' style={{backgroundColor:"rgba(236, 190, 197, 0.179)"}}>

    <section className='primise'>
        <p className='p-5' style={{fontSize:"40px"}}>The Glowmend Promise</p>
        <Row className='mt-5  pb-5'>
            <Col lg={1}></Col>
            <Col lg={2} md={2} sm={12} className='ms-5'>
            <img className='' src={allskin}  alt="noimg" style={{width:'200px'}}  />
            </Col>
            <Col lg={2} md={2}  sm={12} className='ms-5'>
            <img className=''  src={sulphate} alt="noimg" style={{width:'200px'}}  />
            </Col>             
            <Col lg={2} md={2} sm={12} className='ms-5'>
            <img className=''  src={crueltyfree} alt="noimg" style={{width:'200px'}} />
            </Col>            
            <Col lg={2} md={2} sm={12} className='ms-5'>
            <img className='' src={noharsh} alt="noimg"style={{width:'200px'}}  />
            </Col>
            <Col lg={1}></Col>


        </Row>
        </section>

    </div>
      
    </>
  )
}

export default PromisSec
