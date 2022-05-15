import React from 'react'
import CartTable from '../components/CartTable'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setCarProductsThunk } from './redux/actions'
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
import Footer from '../components/Footer'


import './css/car.css'


const Car = () => {
    
    const dispatch = useDispatch()
    const cartValue = useSelector(state=> state.car) 

    const [total, setTotal] = useState(0) // sum total of car




    useEffect(()=>{
        dispatch(setCarProductsThunk())
    }, [dispatch])
  


    useEffect(()=>{
      var amount = 0;
      cartValue.map((x)=> amount += ((x.quantity) * (x.product.price)))
      if(amount > 0 ){
        setTotal(amount)
        
      }else{
        
      }



    }, [setTotal, cartValue]);


  /** */
    /**confirm pay */
const pay = ()=>{
    
    return(
        Swal.fire({
            title: 'make payment?',
            text: "If not, cancel",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'rgb(255, 193, 7)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Pay'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'buy exit',
              )
            }
          })

    )}
/** */

 return (
    <>
      <div className="PageCar">
        <Navbar />
        <h1>
        SHOOPING CART
        </h1>  
        <CartTable info={cartValue} total ={total} />
        <button type="button" className="btn btn-warning" onClick={pay}>To Pay</button>
      </div>
      <Footer />
    </>
  )
}

export default Car