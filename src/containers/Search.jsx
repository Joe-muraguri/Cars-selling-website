import React from 'react'
import '../styles/Search.css'
export const Search = () => {
  return (
    <>
        <div className="search-vehicle mx-auto p-2">
        <p className="fs-5 fw-bolder">Name</p>
            <p className="fs-6 fw-semibold">Write the vehicle name and press the search button</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Vehicles name e.g Demio" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="select row">
                <div className="col-md-6">
                    <select className='form-select aria-label="Default select example' name="Make" id="">
                        <option value="">Select Make</option>
                        <option value="benz">Mercedese</option>
                        <option value="benz">BMW</option>
                        <option value="benz">Toyota</option>
                        <option value="benz">Mitsubishi</option>
                        <option value="benz">Subaru</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <select className='form-select aria-label="Default select example' name="Model" id="">
                        <option value="benz">Mercedese</option>
                        <option value="benz">BMW</option>
                        <option value="benz">Toyota</option>
                        <option value="benz">Mitsubishi</option>
                        <option value="benz">Subaru</option>
                    </select>
                </div>
                <h4 className='yom-heading'>Year of manufacture</h4>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Min YOM" aria-label="Min YOM"/>
                    <span class="input-group-text"></span>
                    <input type="text" class="form-control" placeholder="Max YOM" aria-label="Max YOM"/>
                </div>
            </div>
            <h4>Price</h4>
            <p>Please input your budget</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="0" aria-label="price"/>
                <span class="input-group-text"></span>
                <input type="text" class="form-control" placeholder="Max price" aria-label="Max price"/>
            </div>

            <div class="d-grid gap-2">
                <button class="btn btn-dark" type="button"><i class="fa-solid fa-magnifying-glass"></i>  Search</button>
            </div>
            
    
        </div>
    </>
  )
}
