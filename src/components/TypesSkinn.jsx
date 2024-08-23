import React from 'react'
import skin from '../assets/skincare-removebg-preview.png'
import perfume from '../assets/perfumes-removebg-preview.png'
import lip from '../assets/3d-cartoon-beauty-products-removebg-preview.png'


function TypesSkinn() {
    return (
        <>
            <div className="row m-5">
                <p className='text-center' style={{ fontSize: "40px" }}>Shop By Brand
                </p>
                <div className="col-md-1"></div>
                <div className="col-md-4 skintypes ms-5 col-sm-12 d-flex align-items-center justify-content-center position-relative" style={{ backgroundColor: "rgb(236, 190, 197)", borderRadius: "10px", width: '25%', height: "70vh" }}>
                    <img src={skin} className='typeimage' alt="Skin Care" style={{ width: "100%", borderRadius: "10px" }} />
                    <p className="overlay-text">Skin Care</p>
                </div>
                <div className="col-md-4 skintypes ms-5 col-sm-12 d-flex align-items-center justify-content-center position-relative" style={{ backgroundColor: "rgba(236, 190, 197, 0.18)", borderRadius: "10px", width: '25%', height: "70vh" }}>

                    <img src={lip} alt="" style={{ width: "100%" }} />
                    <p className="overlay-text">Lip Combo</p>


                </div>
                <div className="col-md-4 skintypes ms-5 col-sm-12 d-flex align-items-center justify-content-center position-relative" style={{ backgroundColor: "rgb(236, 190, 197)", borderRadius: "10px", width: '25%', height: "70vh" }}>
                    <img src={perfume} alt="" style={{ width: "70%" }} />
                    <p className="overlay-text">Fragrance</p>

                </div>
            </div>

        </>
    )
}

export default TypesSkinn
