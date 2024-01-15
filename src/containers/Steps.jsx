import React from 'react'
import '../styles/Steps.css'

export const Steps = () => {
  return (
    <div className='container d-flex justify-content-center mb-3'>
        <div class="card" style={{backgroundColor:'rgba(255, 0, 0, 0.1)'}}>
            <div class="card-body text-center buying-process">
                <p>Buying process</p>
                <div className="enquire-process">
                  <div className="select-car EP">
                    <i class="fa-solid fa-car"></i>
                    <p>Select</p>
                  </div>

                  <div className="enquire EP">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <p>Enquire</p>
                  </div>

                  <div className="pay EP">
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <p>Pay</p>
                  </div>

                </div>
                
                
            </div>
        </div>
        
    </div>
  )
}
