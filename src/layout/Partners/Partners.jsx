
import React, { Component } from "react";
import Slider from "react-slick";
import image1 from './../../images/ds.png';
import image2 from './../../images/bbs.png';
import image3 from './../../images/rt.png'; 



export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite:true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img src={image1}/>
          </div>
          <div>
          <img src={image2}/>
          </div>
          <div>
          <img src={image3}/>
          </div>
          <div>
          <img src={image1}/>
          </div>
          <div>
          <img src={image2}/>
          </div>
          <div>
          <img src={image3}/>
          </div>
         
        </Slider>
      </div>
    );
  }
}
