import React from 'react';
import image1 from './../images/pD1.png';
import image2 from './../images/pD2.png';

export default function ProductDes() {
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="pDImg">
                    <img src={image1} className="img-fluid" />

                    </div>
                </div>
                <div className='col-lg-6 pDTxt pt-3'>
                    <h1>New Season</h1>
                    <h2>Make Up Is An Art.</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<br></br>

                        There are many variations passages Lorem Ipsum variatio passages Lorem available, but the majority suffered alteration.</p>
                        <button className='bannerBtn'>SHOP NOW</button>

                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-6 pDTxt ps-2 pt-4'>
                    <h1>HealthLine</h1>
                    <h2>Dry Skin Solution. </h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<br></br>

                        There are many variations passages Lorem Ipsum variatio passages Lorem available, but the majority suffered alteration.</p>
                        <button className='bannerBtn'>SHOP NOW</button>

                </div>
                <div className='col-lg-6 '>
                    <div className='pDImg'>
                    <img src={image2} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
