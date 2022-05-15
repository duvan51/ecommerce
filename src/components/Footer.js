import React from 'react'
import './css/footer.css'



const Footer = () => {
  return (
  <footer className="text-center text-lg-start footer" >
    <div className="container d-flex justify-content-center py-3">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 btns"  >
          <i class="bi bi-facebook"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
           <i class="bi bi-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
            <i class="bi bi-telegram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
            <i class="bi bi-messenger"></i>
      </button>
    </div>
    <div className="text-center text-white p-3 copy">
      © 2020 Copyright:
    </div>
    
  </footer>
  





  )
}

export default Footer