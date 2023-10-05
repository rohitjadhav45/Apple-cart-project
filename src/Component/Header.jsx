import React from 'react'
import { Link } from 'react-router-dom'
import CartBtn from './Button/CartBtn'
import Login from './Button/Login'
import SignUp from './Button/SignUp'
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid py-2">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand mx-auto fw-bold me-5" to="/"><i style={{fontSize:'30px'}} class="fa fa-apple"></i> APPLE MART  </Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto fw-bold mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      
    <Login/>
    <SignUp/>
    <CartBtn/>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header