import React from 'react';
import './style.css'



export default function Products() {
  return (
    <div >
        <div className='productTitle mt-5'>
            <h1>New Season</h1>
            <h2>Trending Products</h2>
            <span className='txt'>Latest Products</span>
            <span className='txt'>New Arrivals</span>
            <span className='txta'>Best Products</span>
        </div>
      <div className='container products mt-5'>
          <div className='row productContainer text-center'>
              <div className='col-md-3 col-xs-6 mb-3'>
                  <div className="customBg">

                  <div className='row'>
                      <img src='https://m.media-amazon.com/images/I/61KQbRUxsgL._SY355_.jpg'/>
                  </div>
                  <div className='row star'>
                      <div className='col-lg-12'>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      </div>
                  </div>
                  <div className='row'>
                      <span className='pName'>Smooth Essen</span>
                      
                  </div>
                  <div className='row'>
                  <span className='pTxt'>$26.00</span>
                  </div>

                  </div>
              </div>
              <div className='col-md-3 mb-3'>
                  <div className="customBg">

                  <div className='row'>
                      <img src='https://m.media-amazon.com/images/I/61KQbRUxsgL._SY355_.jpg'/>
                  </div>
                  <div className='row star'>
                      <div className='col-lg-12'>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      </div>
                  </div>
                  <div className='row'>
                      <span className='pName'>Smooth Essen</span>
                      
                  </div>
                  <div className='row'>
                  <span className='pTxt'>$26.00</span>
                  </div>

                  </div>
              </div>
              <div className='col-md-3 mb-3'>
                  <div className="customBg">

                  <div className='row'>
                      <img src='https://m.media-amazon.com/images/I/61KQbRUxsgL._SY355_.jpg'/>
                  </div>
                  <div className='row star'>
                      <div className='col-lg-12'>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      </div>
                  </div>
                  <div className='row'>
                      <span className='pName'>Smooth Essen</span>
                      
                  </div>
                  <div className='row'>
                  <span className='pTxt'>$26.00</span>
                  </div>

                  </div>
              </div>
              <div className='col-md-3'>
                  <div className="customBg">

                  <div className='row'>
                      <img src='https://m.media-amazon.com/images/I/61KQbRUxsgL._SY355_.jpg'/>
                  </div>
                  <div className='row star'>
                      <div className='col-lg-12'>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      <i className='fas fa-star'/>
                      </div>
                  </div>
                  <div className='row'>
                      <span className='pName'>Smooth Essen</span>
                      
                  </div>
                  <div className='row'>
                  <span className='pTxt'>$26.00</span>
                  </div>

                  </div>
              </div>
          </div>
          <div className='viewBtn'>
          <button className='bannerBtn'>VIEW ALL</button>
          </div>
      </div>
    </div>
  )
}
