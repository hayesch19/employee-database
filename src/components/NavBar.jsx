import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className="top-container">
      <header>
        <h1>Unique Orns</h1>
      </header>
      <nav className="nav-bar">
        <h4 className="nav-link">
          <Link to="/">Home</Link>
        </h4>
        <h4 className="nav-link">
          <Link to="add_employee">Add Staff Member</Link>
        </h4>
      </nav>
    </section>
  )
}

export default NavBar
