import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://i.ibb.co/Wn9KP72/logo-00.png" alt="" width="150" height="24"/>
    </a>
  </div>
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link className="nav-design" to="/home">Home</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-design" to="/about">Tutors</Link>
        </li>
        {/* <li class="nav-item">
         <Link className="nav-design" to="/teach">Courses</Link>
        </li> */}
        <li class="nav-item">
          <Link className="nav-design" to="/contact">Contact</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}

export default Nav
