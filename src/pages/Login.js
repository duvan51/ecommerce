import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/index';


/**css */
import './css/login.css'


const Login = () => {
  
  const {handleSubmit, register} = useForm();
  const [userObject, setUserObject]=useState({});
  const navigate = useNavigate();



  
 const onSubmit = (data) =>{
     console.log(data);
     setUserObject(data)
 } 
 


    useEffect (()=>{
        if(userObject.email){
            loginUser(userObject)
        .then((res)=>{
            localStorage.setItem("token", res.access);
        })
        .then(()=> {
          navigate('/shop')
        })

        }
    },[userObject, navigate])



 
 
  return (
 <div className="pageLogin">
    <form className = "login" onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        <div className="line"></div>
        <div className="form-floating mb-3">
          <input 
          type="email" 
          placeholder='name@example.com' 
          {...register("email")} 
          id="floatingInput"
          className="form-control"
          />
          <label htmlFor='email floatingInput'>Email</label>
        </div>
        
        
        <div className="form-floating">
          <input 
          type="password" 
          placeholder='*****' 
          {...register("password")} 
          className="form-control"
          id= "floatingPassword"
          />
          <label htmlFor='email floatingPassword'>Password</label>
        </div>
        
        <input type="submit" className='btn btn-outline-success' value="Log In" /> 
        
      </form>
      <input type="submit" value="createUser" className='createUser' />
      
  </div>
  )
}

export default Login
