import React from 'react'
import { Link } from 'react-router-dom'
import Images from './Images.js';



import './css/productItem.css'

const ProductItem = ({probObject}) => {

 
  const Image = probObject.images
  const oneImge = Image[0].url 
 



  
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={oneImge} className="card-img-top" alt="..." />
          <div className="info">
            <i class="bi bi-search"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">{probObject.name}</h5>
            <p className="card-text">{probObject.description}</p>
            
          </div>
          <div className="card-car">
            <div className="card-car-price">{`$ ${probObject.price}`}</div>
            <i className="bi bi-pci-card iconAddCard"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
