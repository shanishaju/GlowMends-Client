import React from 'react'
import girl from '../assets/girlQuote.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function QuoteSec() {
    return (
        <>
            <div className="row " style={{ backgroundColor: "#76453f" }} >
                <div className="col-md-2"></div>

                <div className="col-md-4 quotes ">
                    <p className='text-light pt-5' style={{ fontSize: "30px" }}>Discover Beauty in Self L♡ve</p>
                    <p><FontAwesomeIcon className='fs-1' icon={faQuoteLeft} style={{ color: "#c6a58d", }} /></p>
                    <p className='text-light '> Discover the secret to radiant, healthy skin with our luxurious skincare products. Crafted with the finest natural ingredients, each product is designed to nourish, hydrate, and rejuvenate your skin, revealing its natural glow. Whether you're looking to combat signs of aging, soothe sensitive skin, or simply enhance your daily routine, our skincare line offers the perfect solution. Trust in the purity of our formulations and indulge in a skincare experience that leaves your skin feeling soft, smooth, and beautifully revitalized. Because when it comes to your skin, only the best will do. </p>

                    <span className='float-end'>
                        <FontAwesomeIcon className='fs-1' icon={faQuoteRight} style={{ color: "#c6a58d" }} />
                    </span>
                </div>
                <div className="col-md-6">
                    <img className='ms-5' src={girl} alt="noimg" />
                </div>
            </div>

        </>
    )
}

export default QuoteSec
