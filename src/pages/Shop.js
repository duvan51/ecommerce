import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from "react-redux"
import { setProductThunk, setCategoriesThunk } from './redux/actions'
import Menu from '../components/Menu.js'
import Navbar from '../components/Navbar.js'



import './css/shop.css'
import Footer from '../components/Footer'

const Shop = () => {

  const dispatch = useDispatch()
  const productArr = useSelector(state=> state.products)
  const categoriesArr = useSelector(state=> state.categories)

  const [currentCategory, setCurrentCategory] = useState(0)//info del menu

  useEffect(()=>{
    dispatch(setProductThunk(currentCategory))
    dispatch(setCategoriesThunk())
  }, [dispatch, currentCategory])



  const menu = categoriesArr;
 

  const List = productArr.map((item) => <ProductItem key={item.id} probObject={item}  />)
 


  return (
    <>  
      <Menu menu={menu} handlerid={setCurrentCategory}  />
      <Navbar  />
      <div className= "Listproducts ">
        {List}
      </div>
      <Footer />
    </>
  )
}

export default Shop
