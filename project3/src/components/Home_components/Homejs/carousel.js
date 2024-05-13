import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import C1 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/c1.jpg'
import C2 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/c2.jpg'
import C3 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/c3.jpg'
import C4 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/c4.jpg'
import C5 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/c5.jpg'
import '../Homecss/carousel.css'


function carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (

    <Slider {...settings} className='carousel'>
      <div className='carousel1'>
        <img src={C1} className='carouselimage' alt='img' />
      </div>

        <div className='carousel1' >
        <img src={C2} className='carouselimage' alt='img' />
        </div>

        <div className='carousel1'>
        <img src={C3} className='carouselimage' alt='img' />
        </div>

        <div className='carousel1'>
        <img src={C4} className='carouselimage' alt='img' />
        </div>

        <div className='carousel1'>
        <img src={C5} className='carouselimage' alt='img' />
        </div>
    </Slider>

  )
}

export default carousel