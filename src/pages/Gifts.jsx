import { Stack } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import { Box } from '@mui/material';
import gbg1 from '../assets/gbg3.avif';
import Footer from '../components/Footer';

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
            </div>

          </Box>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}

export default Gifts;
