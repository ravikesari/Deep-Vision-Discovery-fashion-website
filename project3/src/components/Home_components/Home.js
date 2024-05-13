import React from 'react'
import Section1 from './Homejs/Section1'
import NewProducts from './Homejs/New_products'
import Footer from './Homejs/Footer';
import Carousel from './Homejs/carousel';


function Home() {
  return (
    <div className='Home'>
        <Section1 />
        <NewProducts />
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default Home