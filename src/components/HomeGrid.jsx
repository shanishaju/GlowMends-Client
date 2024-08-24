import React from 'react'
import img1 from '../assets/travelbag2-removebg-preview.png'
import img2 from '../assets/travelbag-removebg-preview.png'
import bglady from '../assets/bglady-removebg-preview.png'



function HomeGrid() {
    return (
        <>
            <div className="row m-5">
                <div className="col-md-4 col-sm-12">
                    <div className="hover-div shadow" style={{
                        background: "linear-gradient(to left,rgb(211, 207, 207), rgb(223, 219, 219))",
                    }}>
                        <img className="mt-3" src={img1} alt="" style={{ width: "100%" }} />
                        <div className="overlay  flex-column">
                            <p className="show-more-text p-4 " style={{color:"#76453f",fontSize:"20px"}}>Keep your beauty essentials organized with our sleek and compact travel makeup bag.</p>
                        <button className='btn '>Try now</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className='mt-5 align-items-center justify-content-center d-flex flex-column'>
                        <h4>Free Travel Gift</h4>
                        <p>Your Perfect Travel Companion!</p>
                        <button className='btn btn-secondary'>Shop Now</button>
                        <div className="circle-container">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <img src={bglady} alt="" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div style={{
                        background: "linear-gradient(to left,rgb(211, 207, 207), rgb(223, 219, 219))",
                        borderRadius: "5px",
                        height: "60vh"
                    }} className='shadow hover-div'>
                        <img className='mt-5' src={img2} alt="" style={{ width: "100%" }} />
                        <div className="overlay   flex-column">
                            <p className="show-more-text  p-4 " style={{color:"#76453f",fontSize:"20px"}}>Designed for style and functionality, it fits easily in any luggage, making it ideal for your next adventure.</p>
                            <button className='btn '>Try now</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

        </>
    )
}

export default HomeGrid
