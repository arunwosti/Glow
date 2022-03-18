import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../images/b1.png';
import image2 from './../images/b2.png';
import image3 from './../images/b3.png';
import './style.css';

const CarouselContainer = () => {
    return (<div className='banner'>
        <Carousel>
  <Carousel.Item interval={100} >
    <img
      className="d-block w-100 "
      src={image1}
      alt="First slide"
    />
    <div className='bannerTxt'>
    <h1>natural</h1>
    <h2>Skin Care</h2>
    <p >See all the theme demos here and we will be adding more to the showcase. All the theme sections are editable in the Admin and does not require coding knowledge</p>
    <button className='bannerBtn'>SHOP NOW</button>
    </div>
    
  </Carousel.Item>
  <Carousel.Item interval={50}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <div className='bannerTxt'>
    <h1>summer</h1>
    <h2>Face Cleanser</h2>
    <p >See all the theme demos here and we will be adding more to the showcase. All the theme sections are editable in the Admin and does not require coding knowledge</p>
    <button className='bannerBtn'>SHOP NOW</button>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Third slide"
    />
    <div className='bannerTxt'>
    <h1>natural</h1>
    <h2>Skin Care</h2>
    <p >See all the theme demos here and we will be adding more to the showcase. All the theme sections are editable in the Admin and does not require coding knowledge</p>
    <button className='bannerBtn'>SHOP NOW</button>
    </div>
  </Carousel.Item>
</Carousel>
</div>
)
    }
    

export default CarouselContainer;
