import Card from 'react-bootstrap/Card';
import img1 from '../assets/serum1.jpg'
import img2 from '../assets/serum2.jpg'
import img3 from '../assets/serum3.avif'
import img4 from '../assets/serum3.jpg'








import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

function CardsHome() {

    return (
        <>

            <div className='ms-5 me-5'>
                <p className='text-center p-5' style={{ fontSize: "30px" }}>Discover Your Inner Light & Illuminate Your Radiance </p>
                <div className='container d-flex pb-5'>
                    <Card className='ms-3' style={{ width: '18rem', borderRadius: "10px" }}>
                        <Card.Img className='' variant="top" src={img1} style={{ height: "75%" }} />
                        <Card.Body>
                            <Card.Title>ETERNELLE - Anti-Aging Serum</Card.Title>
                            <div className='d-flex justify-content-between mt-3'>
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='ms-3' style={{ width: '18rem', borderRadius: "10px" }}>
                        <Card.Img className='' variant="top" src={img2} style={{ height: "75%" }} />
                        <Card.Body>
                            <Card.Title>SKINTILLATE - Booster Oil</Card.Title>
                            <div className='d-flex justify-content-between mt-3'>
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='ms-3' style={{ width: '18rem', borderRadius: "10px" }}>
                        <Card.Img className='' variant="top" src={img3} style={{ height: "75%" }} />
                        <Card.Body>
                            <Card.Title>ILLUMINATE - Glow Serum</Card.Title>
                            <div className='d-flex justify-content-between mt-3'>
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='ms-3' style={{ width: '18rem', borderRadius: "10px" }}>
                        <Card.Img className='' variant="top" src={img4} style={{ height: "75%" }} />
                        <Card.Body>
                            <Card.Title>REJUVENATE - Night Serum        </Card.Title>
                            <div className='d-flex justify-content-between mt-3'>
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex justify-content-center pb-5">
                    <button className="btn btn-danger">Shop All</button>
                </div>
            </div>
        </>
    )
}

export default CardsHome
