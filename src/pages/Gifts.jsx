import { Stack } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import { Box } from '@mui/material';
import gbg1 from '../assets/gbg3.avif';
import Footer from '../components/Footer';
import img from '../assets/glowmendlog.png'

function Gifts() {
  return (
    <>
      <Stack>
        {/* banner */}
        <Stack
          sx={{
            width: "100%",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              position: "relative",  // Make the Box a relative container
              backgroundImage: `url(${gbg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <Header />

            {/* Text content */}
            <div style={{
              position: "absolute",
              top: "30%",
              left: "8%",
              color: "#76453f",
              zIndex: 2,
            }}
            >
              <p style={{
                fontSize: "40px",
              }}>
                Self-L♡ve Gift Bundles
              </p>
              <p style={{
                fontSize: "20px",
              }}>These curated bundles are crafted to enhance your self-care routine,<br /> offering a refined selection of products that nurture both body and mind,<br /> ideal for moments of relaxation and personal indulgence.</p>
              <div style={{
                borderBottom: "4px dotted #76453f",
                width: "50%",
                marginTop: "-50px",
                borderRadius: "50%",
                height: "100px"

              }}>

              </div>
            </div>


          </Box>
        </Stack>
        <section
  className="services-2 section pt-5"
  style={{
    height: "100vh",
    backgroundColor: "#d2c0b4",
    backgroundImage: `url(${img})`, 
    backgroundSize: "contain", 
    backgroundPosition: "top center", 
    backgroundRepeat: "no-repeat", 
  }}
>
  <div className="container d-flex align-items-center justify-content-center">
    <div
      className="row d-flex align-items-center justify-content-center "
      data-aos="fade-up"
      style={{ paddingTop: "100px", color: "#76453f" }}
    >
      <div className="col-md-6 col-lg-4">
        <p style={{ fontSize: "40px" }}>Pamper Your Skin</p>
        <p className="lead">
          Discover the secret to glowing, healthy skin with our natural skincare
          products.
        </p>
        <p className="mb-5">
          Our carefully curated products nourish and rejuvenate, giving your
          skin the love it deserves.
        </p>
        <p>
          <a href="/products" className="btn">
            Shop Now
          </a>
        </p>
      </div>
      <div className="col-md-6 col-lg-6 ps-lg-5 ms-5">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div className="services-item" data-aos="fade-up" data-aos-delay="">
              <div className="services-icon">
                <i className="bi bi-search"></i>
              </div>
              <div>
                <p style={{ fontSize: "35px" }}>Exfoliate</p>
                <p>
                  Reveal fresh, glowing skin with our gentle exfoliators.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div
              className="services-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="services-icon">
                <i className="bi bi-command"></i>
              </div>
              <div>
                <p style={{ fontSize: "35px" }}>Hydrate</p>
                <p>
                  Lock in moisture with our hydrating skincare solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div
              className="services-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="services-icon">
                <i className="bi bi-grid"></i>
              </div>
              <div>
                <p style={{ fontSize: "35px" }}>Brighten</p>
                <p>
                  Enhance your skin's natural glow with our brightening
                  products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div
              className="services-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="services-icon">
                <i className="bi bi-globe"></i>
              </div>
              <div>
                <p style={{ fontSize: "35px" }}>Protect</p>
                <p>
                  Shield your skin from environmental stressors with our SPF
                  range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </Stack>
      <Footer />
    </>
  );
}

export default Gifts;
