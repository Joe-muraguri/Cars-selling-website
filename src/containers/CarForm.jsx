import React, { useState } from 'react'
import { firestore } from 'firebase/firestore'
import 'firebase/storage';

export const CarForm = () => {
    const [carDetails, setCarDetails] = useState({make:'', model:'', year:''})
    const [image, setImage] = useState(null)

    const handleChange = (e) =>{
        const [name, value] = e.target;
        setCarDetails((prev)=>({...prev, [name]:value}))
    }

    const handleImageChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        
    }
  return (
    <div className="container mt-5" style={{width:'60%'}}>
        <h2>Add Vehicle</h2>

        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="make" class="form-label">Make:</label>
                <input type="text" name='make' value={carDetails.make} class="form-control" onChange={handleChange} />
                
            </div>
            <div class="mb-3">
                <label for="make" class="form-label">Model:</label>
                <input type="text" name='make' value={carDetails.model} class="form-control" onChange={handleChange} />
                
            </div>
            <div class="mb-3">
                <label for="make" class="form-label">Year:</label>
                <input type="text" name='make' value={carDetails.year} class="form-control" onChange={handleChange} />
                
            </div>
            <div class="mb-3">
                <label for="make" class="form-label">Car Photo:</label>
                <input type="file" name='make' value={carDetails.make} class="form-control" onChange={handleChange} />
                
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
