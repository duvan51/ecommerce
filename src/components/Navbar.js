import React from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbarLinks">
        <Link to="/shop/">
            <div>
                Home
            </div>
        </Link>
        <i className="bi bi-chevron-right"></i>
        <div>
            product
        </div>
        <i className="bi bi-chevron-right"></i>
        <Link to="/cart/">
          <div>
              Cart
          </div>
        </Link>
    </div>
  )
}

export default Navbar