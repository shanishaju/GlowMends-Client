import React from 'react'
import dgimg from '../assets/aurora (1).png'
import star from '../assets/pink-sparkle-discord.gif'

import { Row, Col} from 'react-bootstrap'
import Header from './Header'

function Banner() {
    
  return (
    <>

<div className='text-center  ' style={{backgroundColor:"#ffcad4",overflowX:"hidden" ,height:"100vh"}}>
  <Header/>
        <Row>
            <Col md={2} >
            <img src={star} alt="noimg" />
             </Col>
            <Col md={8} sm={12}>
            <img  className='mt-5' src={dgimg} alt="noimg" />
            </Col>
            <Col md={2}>
            <img src={star} alt="noimg" />
            </Col>

        </Row>

    </div>
      
    </>
  )
}

export default Banner
