import React, { useState } from 'react'
import '../styles/Header.css'

export const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="header">
      <h1 id='logo'>JM<span>motors</span></h1>
        
      <ul className= {navbar ? "navbar" : "flex"} onClick={()=>setNavbar(false)}>
          <li><a>Kenyan Stock</a></li>
          <li><a>International Stock</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
      </ul>
          
      
      <button className='barIcon' onClick={()=>setNavbar(!navbar)}>{navbar ? <i class="fa-solid fa-circle-xmark"></i> : <i class="fa-solid fa-bars"></i>}</button>
    </div>
    
  )
}
