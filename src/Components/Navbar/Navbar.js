import React from 'react'

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">

        <a className="nav-link fw-bold fs-3 " href="/products">Products<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link fw-bold fs-3 " href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link fw-bold fs-3 " href="/userInfo">User Info</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar