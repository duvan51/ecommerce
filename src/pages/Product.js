import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setInfoProductThunk} from './redux/actions'
import {useSelector} from 'react-redux'
import Navbar from '../components/Navbar.js'
import {addProductTocart} from '../services/index'


import './css/product.css'
import Swal from 'sweetalert2'


const Product = () => {
  
  const {id} = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.productInfo)
  const [quantity, setQuantity]=useState(0)// carrito
  const [confirm, setConfirm] = useState(false)

  
  useEffect(()=>{
     dispatch(setInfoProductThunk(id))

  }, [dispatch, id])


  const img = product.images
  
  const alertIm = (url)=> {
    return (
    Swal.fire({
    imageUrl: url,
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
    backdrop:" linear-gradient(187deg, rgba(0,29,255,1) 17%, rgba(238,1,247,1) 96% , 0.9",
  }))}
  

/*start car */
 useEffect(()=>{
    if(quantity  && confirm){
      addProductTocart({
        product : id,
        quantity : quantity
      })
      .then((x)=> 
      
      console.log(x),
       setConfirm(false)
      )
    }

 }, [quantity, confirm, id])


/*end car */

  
  return (
    <div className="product">
      <Navbar />
      <section className="InfoProduct">
        <div className='InfoProductImg'> 
          <div>
            <img src=" " alt="" />
          </div>
        </div>
        <div className='InfoProductListImg'>
            {/**   array con minis */
            img?.map((i) =>
              <button key={i.id} onClick={()=>{ alertIm(i.url)}}>
                <img src={i.url} alt="" /> 
              </button>    
            )
            
            }
          
        </div>
        <div className="InfoProductName">
          <h1>
            {product.name}
          </h1>
        </div>
        <div className="InfoProductPrice">
          <p> $ {product.price}</p>
        </div>
        <div className="InfoProductDescription">
          <p> {product.description}</p>
        </div>
      </section>
      <div className="car">  
             <div className="carSize">
                <select className="form-select" aria-label="Default select example">
                  <option >select size</option>
                  <option defaultValue="1">S</option>
                  <option defaultValue="2">M</option>
                  <option defaultValue="3">XL</option>
                </select>
             </div>
            <div className="carCount">
                <input type="number" className="form-control" id="quantity" name="quantity" min="1" max="10" onChange={event => setQuantity(event.target.value)} />
                
                <button className="btn btn-success"  onClick={()=> setConfirm(true)}>
                   <i className="bi bi-pci-card"></i>
                </button>
            </div>
      </div> 

    </div>
  )
}

export default Product