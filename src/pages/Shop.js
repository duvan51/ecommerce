import React, { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from "react-redux"
import { setProductThunk } from './redux/actions'



import './css/shop.css'

const Shop = () => {




  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(setProductThunk())
    
    
  }, [dispatch])


  const productArr = useSelector(state=> state.products)
  
  const List = productArr.map((item) => <ProductItem key={item.id} probObject={item}  />)
  

  return (
    <div className= "Listproducts">
      {List}
    </div>
  )
}

export default Shop
