import React from 'react'
import img1 from '../assets/travelbag2-removebg-preview.png'
import img2 from '../assets/travelbag-removebg-preview.png'
import bglady from '../assets/bglady-removebg-preview.png'



function HomeGrid() {
    return (
        <>
            <div className="row m-5">
                <div className="col-md-4 " >
                    <div style={{
                        background: "linear-gradient(to left,rgb(211, 207, 207), rgb(223, 219, 219))",
                        borderRadius: "5px",
                        height: "60vh"
                        
                    }} className='shadow'>                        
                    <img className='mt-3' src={img1} alt="" style={{ width: "100%" }} />
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
                    }} className='shadow'>                          
                    <img className='mt-5' src={img2} alt="" style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

        </>
    )
}

export default HomeGrid
