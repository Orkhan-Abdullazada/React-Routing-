import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    
     <footer>
        <div className="footer-content">
          <div>
            <p>&copy; Movies</p>
          </div>
          <div>
            <ul className="footer-links">
              <li><a href="#home">Map</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
  </footer>
  )
}

export default Footer