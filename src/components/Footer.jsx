import React from 'react'
import '../styles/Footer.css'
export const Footer = () => {
  return (
    <>
        <footer style={{ backgroundColor: '#E4ECEC' }} className="footer text-dark py-4 mt-10">
      <div className="container mt-10">
        <div className="row">
          <div className="col-md-3">
            
            <h5>Joe motors</h5>
            <ul>
              <p>&copy; 2024 Joes motors</p>
              
              
            </ul>
          </div>
          <div className="col-md-3">
           
            <h5>Company</h5>
            <ul>
              <p>About</p>
              <p>Location</p>
              
            </ul>
          </div>
          <div className="col-md-3">
            
            <h5>Contact</h5>
            <ul>
              <p>+254717988187</p>
              <p>joemotors@gmail.com</p>
              
            </ul>
          </div>
          <div className="col-md-3">
            
            <h5>NewsLetter</h5>
            
              
            
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
