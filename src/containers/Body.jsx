import React from 'react'

export const Body = () => {
    const svgImages = [
        "images/suvs.svg",
        "images/convertibles.svg",
        "images/hatchbacks.svg",
        "images/saloons.svg",
        "images/vans.svg",
        "images/pickups.svg",

    ];
  return (
    <>
        <div className="container d-flex justify-content-center" style={{width:'60%'}}>
            <div className="row">
                {svgImages.map((path, index)=>(
                    <div key={index} className="col-md-4 mb-3">
                        <div class="card" style={{backgroundColor:'rgba(255, 0, 0, 0.1)'}}>
                            <div class="card-body text-center">
                                <img src={path} alt={`svg image ${index + 1}`} className="img-fluid" style={{width:'100px',height:'150px'}} />
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
