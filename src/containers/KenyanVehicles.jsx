import React from 'react'
import { CarForm } from './CarForm'
import { vehicle } from '../data'

export const KenyanVehicles = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
        
        <div className="row">
            {vehicle.cars.map((car, index)=>(
                <div className="col-md-4">
                    <div class="card mb-4" style={{width: '18rem'}}>
                    <img src={car.imageUrl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{car.make}</h5>
                        <p class="card-text">Specs: {car.specs.join(', ')}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> {car.model}</li>
                        <li class="list-group-item">Year {car.year}</li>
                        
                    </ul>
                   
            </div>
                </div>
            ))}
        
            </div>
    </div>
  )
}
