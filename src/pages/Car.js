import React from 'react'
import CartTable from '../components/CartTable'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setCarProductsThunk } from './redux/actions'
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
import Footer from '../components/Footer'


const Car = () => {
    
    const dispatch = useDispatch()
    
    const cartValue = useSelector(state=> state.car) 


    useEffect(()=>{
        dispatch(setCarProductsThunk())


    }, [dispatch])
  
  
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
    <Navbar />
    <h1>
     SHOOPING CART
    </h1>  
     <CartTable info={cartValue} />
     <button type="button" className="btn btn-warning" onClick={pay}>To Pay</button>




     <Footer />   
    </>
  )
}

export default Car