import React from 'react'

export const Brand = () => {
    const svgImages = [
        "images/audi.svg",
        "images/mercedes.svg",
        "images/bmw.svg",
        "images/honda.svg",
        "images/mazda.svg",
        "images/toyota.svg",
        "images/VW.svg",
        "images/nissan.svg",
        "images/subaru.svg"

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
