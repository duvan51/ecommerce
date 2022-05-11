import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protectedpages = () => {
    
    if(localStorage.getItem('token')){
      return   <Outlet />
    }else{
        return <Navigate to='/login' />
    }
  
}

export default Protectedpages
