import React from 'react'
import './css/menu.css'

const Menu = ({menu, handlerid}) => {

    const men = menu.map ((x)=> {return(
        <li className="nav-item liNav" key={x.id}>
            <button className="nav-link active" aria-current="page" onClick={()=> handlerid(x.id)}>{x.name}</button>
        </li> 
    )})


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light menuNavbar">
            <div className="container-fluid">
                <a href="#" className="navbar-brand"> Nabvar </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {men}
                    <button className="nav-link active all" onClick={()=> handlerid("")}>
                        All
                    </button>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>


    </>
  )
}

export default Menu