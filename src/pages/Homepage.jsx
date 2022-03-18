import React from 'react';
import './page.css'
import CarouselContainer from '../components/CarouselContainer'
import Products from '../components/Products';
import ProductDes from '../components/ProductDes';
import Attachedbanner from '../components/Attached-banner';
import Testimonial from '../components/Testimonial';


const Category=[
    {
        id : 1,
      cname : "EYE LINER",
    },
    {
        id : 2,
      cname : "FOUNDATION",
    },
    {
        id : 3,
      cname : "LIPSTICK",
    },
    {
        id : 4,
      cname : "NAIL POLISH",
    },
    {
        id : 5,
      cname : "MAKEUP KIT",
    }
]

export default function Homepage() {
  return (
    <div>
        <div className='container-fluid homearea'>
            <div className='row'>
                <div className='col-lg-2'>
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    ALL CATEGORY
  </button>
  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
     <a href="#" className="list-group-item list-group-item-action">TONER</a>
                           {Category.map((i)=>(
                  <a href="#" className="list-group-item ">{i.cname}</a>
                ))}
  </ul>
</div>
                </div>
                <div className='col-lg-10'>
                <CarouselContainer/>
                </div>
            </div>
        </div>
        <Products/>
        <ProductDes/>
        <Attachedbanner/>
        <Testimonial/>
        
    </div>
  )
}
