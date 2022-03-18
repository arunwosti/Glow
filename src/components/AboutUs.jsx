import React from 'react';
import image1 from './../images/ab1.png'

export default function AboutUs() {
  return (
    <div>
        <div className='container '>
            <div className='Aboutus'>
                <h1>About Us</h1>
            </div>
            <div className='row'>
                <div className='col-lg-6 back-img'>
                    <img src={image1} className='img-fluid'/>
                </div>
                <div className='col-lg-6 Aboutul'>
                    <h2>We Have Everything You Need ?</h2>
                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer</p>
                    <ul>
                        <ut><strong>Sample Unordered List</strong></ut>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                    </ul>
                    <button className='bannerBtn'>Contact Us <i  className='fas fa-arrow-right'/> </button>
                </div>
                    
            </div>
            <div className='row ourservices mt-5 mb-5'>
                <div className='col-lg-12 text-center'>
                    <h1>The Products</h1>
                    <h2>Our Services</h2>
                </div>
            </div>
            <div className='row serviceitems'>
                <div className='col-lg-4 serviceitemsa'>
                    
                    <i className='fab fa-cloudscale iconn'/>
                   
                    <h6>FREE RESOURCES</h6>
                    <p>
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward</p>
                </div>
                <div className='col-lg-4 serviceitemsa'>
                    
                    <i className='fab fa-cloudscale iconn'/>
                   
                    <h6>MULTI PURPOSE</h6>
                    <p>
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward</p>
                </div>
                <div className='col-lg-4 serviceitemsa'>
                    
                    <i className='fab fa-cloudscale iconn'/>
                   
                    <h6>FULLY RESPONSIVE</h6>
                    <p>
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward</p>
                </div>
            </div>

            <div className='row mt-5 mb-5'>
                
                <div className='col-lg-6 Aboutul'>
                    <h2>We Have Everything You Need ?</h2>
                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer</p>
                    <ul>
                        <ut><strong>Sample Unordered List</strong></ut>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                        <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                    </ul>
                    <button className='bannerBtn'>Contact Us <i  className='fas fa-arrow-right'/> </button>
                </div>
                <div className='col-lg-6 back-img'>
                    <img src={image1} className='img-fluid'/>
                </div>   
            </div>
        </div>
    </div>
  )
}
