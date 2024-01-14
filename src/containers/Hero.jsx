import React from 'react'
import '../styles/Hero.css'

export const Hero = () => {
  return (
    <div>
        <h1 className='hero-heading'>Find your dream car</h1>
        <div className="hero-img">
            <img src="images/benz.webp" alt="" />
        </div>
        <div className="vehicles-kenya">
            <button type="button" class="btn btn-dark  me-5">OUR VEHICLES</button>
            
            <button type="button" class="btn btn-secondary">OUR PARTNERS VEHICLES</button>
        </div>
        <div className="research-car">
            <h3>Research the car befor buying</h3>
            <p>We help you find a car that fits Your personality, dream and pocket!</p>
        </div>
        <div className="search">
            <button type="button" class="btn btn-outline-success me-3">Advanced search</button>
            <button type="button" class="btn btn-outline-danger me-3">Search by Brand</button>
            <button type="button" class="btn btn-outline-primary">Body Type</button>
            
        </div>
    </div>
  )
}
