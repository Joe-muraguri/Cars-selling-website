import React, { useState } from 'react'
import '../styles/Hero.css'
import { Search } from './Search'
import {Brand} from './Brand'
import {Body} from './Body'
import { Link } from 'react-router-dom'
import { Steps } from './Steps'
// import {useHistory} from 'react-router-dom'

export const Hero = () => {
    const [activeSearch, setActiveSearch] = useState('advancedsearch')
    // const history = useHistory()

    

    const handleButtonClick = (componentName) =>{
        setActiveSearch(componentName);
    }
  return (
    <div>
        <h1 className='hero-heading'>Find your dream car</h1>
        <div className="hero-img">
            <img src="images/benz.webp" alt="" />
        </div>
        <div className="vehicles-kenya">
            <Link to="/kenyan_vehicles">
                <button type="button" class="btn btn-dark  me-5">OUR VEHICLES</button>
            </Link>
          
            
            <button type="button" class="btn btn-secondary">OUR PARTNERS VEHICLES</button>
        </div>
        <div className="research-car">
            <h3>Research the car befor buying</h3>
            <p>We help you find a car that fits Your personality, dream and pocket!</p>
        </div>
        <div className="search">
            <button onClick={()=>handleButtonClick('advancedsearch')} type="button" class="btn btn-outline-success me-3">Advanced search</button>
            <button onClick={()=>handleButtonClick('brandsearch')} type="button" class="btn btn-outline-danger me-3">Search by Brand</button>
            <button onClick={()=>handleButtonClick('bodysearch')} type="button" class="btn btn-outline-primary">Body Type</button>

            
            
        </div>
        {activeSearch === 'advancedsearch' && <Search/>}
        {activeSearch === 'brandsearch' && <Brand/>}
        {activeSearch === 'bodysearch' && <Body/>}

        <Steps/>
    </div>
  )
}
