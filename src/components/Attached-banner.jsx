import React from 'react';
import './style.css';

export default function Attachedbanner() {
  return (
    <div className='attached-banner'>
        <div className='container '>
            <div 
            className='row '>
                <div className='col-lg-7 '>
                  <div className='container cont_size'></div>
                </div>
                <div className='col-lg-5 pt-3'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <button className='bannerBtn mb-5'>Learn More...</button>
                </div>
            </div>
        </div>
    </div>
  )
}
