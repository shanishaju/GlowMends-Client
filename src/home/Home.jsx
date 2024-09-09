import React from 'react';
import Footer from '../components/Footer'
import Banner from '../components/Banner';
import CardsHome from '../components/CardsHome';
import HomeGrid from '../components/homegrid';
import PromisSec from '../components/PromisSec';
import QuoteSec from '../components/QuoteSec';
import TypesSkinn from '../components/TypesSkinn';
import Header from '../components/Header';
import Sunscribe from '../components/Sunscribe';




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

            <Sunscribe/>

            {/* <!-- Footer--> */}
            <Footer />


        </>
    )
}

export default Home
