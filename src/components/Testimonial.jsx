import React from 'react';
import './style.css';
import { Carousel } from 'react-bootstrap';

export default function Testimonial() {
  return (
    <div className=" testimonial-section">
    <div className="container text-center">
      <div className="text-center">
        <h1>Testimonial</h1>
      </div>
      <div className="row review">
        <div className="col-sm-12 col-lg-10 offset-lg-1">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active ms-auto">
                <div className="row ">
                  <div className="col-lg-3">
                    <img src="https://img.mensxp.com/media/content/2021/Jul/Tom-Cruise-Trolled-For-Looking-Old-At-Wimbledon1200_60ec340542298.jpeg" class="d-block w-100 img-fluid" alt="..."/> 
                  </div>
                  <div className="col-lg-8   reviewpro">
                   <p>-- Professional Actor </p>
                  </div>
                </div>
               
                  <p className='TstP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est delectus neque dolorum tempore commodi consequatur, exercitationem doloribus harum reprehenderit fuga nobis cumque rerum debitis culpa illum nam et vel.</p>
               </div>
               <div className="carousel-item">
                <div className="row ">
                  <div className="col-lg-3">
                    <img src="https://cdn-1.motorsport.com/images/amp/2y3WgW96/s1000/marc-marquez-repsol-honda-team.jpg" className="d-block w-100 img-fluid" alt="..."/> 
                  </div>
                  <div className="col-lg-8   reviewpro">
                   <p>-- Motogp World Champion </p>
                  </div>
                </div>
               
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est delectus neque dolorum tempore commodi consequatur, exercitationem doloribus harum reprehenderit fuga nobis cumque rerum debitis culpa illum nam et vel.</p>
              </div>
              <div className="carousel-item">
                <div className="row ">
                  <div className="col-lg-3">
                    <img src="https://i.insider.com/575a5791dd0895c2678b49f8?width=600&format=jpeg&auto=webp" className="d-block w-100 img-fluid" alt="..."/> 
                  </div>
                  <div className="col-lg-8   reviewpro">
                   <p>-- Professional Football Player </p>
                  </div>
                </div>
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est delectus neque dolorum tempore commodi consequatur, exercitationem doloribus harum reprehenderit fuga nobis cumque rerum debitis culpa illum nam et vel.</p>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden"><i className="fas fa-angle-left"></i></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden"><i className="fas fa-angle-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
