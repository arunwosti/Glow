import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid menu">
    <a class="navbar-brand" href="#"><span className='glow'>GLOW</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ">
        <li class="nav-item">
        <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/about' class="nav-link" >About Us</Link>
        </li>
      </ul>
      <form class="d-flex ms-auto">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src='https://akira-elementor.axonvip.com/supper-market/img/l/1.jpg' />  ENGLISH
          </a>
          <ul class="dropdown-menu ms-auto" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#"><img src='https://akira-elementor.axonvip.com/supper-market/img/l/1.jpg' /> ENGLISH</a></li>
              <li><a class="dropdown-item" href="#"><img src="https://akira-elementor.axonvip.com/supper-market/img/l/2.jpg"/> ESPANOL</a></li>
              <li><a class="dropdown-item" href="#"><img src="https://akira-elementor.axonvip.com/supper-market/img/l/3.jpg"/> FRANCOS</a></li>
              <li><a class="dropdown-item" href="#"><img src="https://akira-elementor.axonvip.com/supper-market/img/l/3.jpg"/> ITALINO</a></li>
            </ul>
        </li>
        
      </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className='fas fa-dollar-sign'/>  USD
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#"><i className='fas fa-euro-sign'/>   EUR</a></li>
              <li><a class="dropdown-item" href="#"><i className='fas fa-dollar-sign'/> USD</a></li>
              
            </ul>
        </li>
        
      </ul>
      </div>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
