import React from 'react';
import Footer from '../components/Footer'
import Banner from '../components/Banner';
import CardsHome from '../components/CardsHome';
import HomeGrid from '../components/homegrid';
import PromisSec from '../components/PromisSec';
import QuoteSec from '../components/QuoteSec';
import TypesSkinn from '../components/TypesSkinn';




function Home() {


    
    return (
        <>
            <Banner />
            <div  style={{backgroundColor:"rgba(236, 190, 197, 0.179)"}}>
            <CardsHome/>
            </div>
            <HomeGrid/>
            <section id='promise'>
            <PromisSec/>
            <section>
            <QuoteSec/>

            </section>
            <TypesSkinn/>

            </section>



            {/* <!-- Footer--> */}
            <Footer />


        </>
    )
}

export default Home
