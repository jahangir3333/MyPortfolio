import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
<>
 <header className="header bg-dark text-light p-3" id='header'>
    <div className="logo">
      <h1 style={{ fontFamily: 'Permanent Marker, cursive' }}><span style={{ color: 'orangered' }}>Jaha</span>ngir</h1>
    </div>
    <div className="menu-buttons">
      <Link to="/">Portfolio</Link>
      <Link to="/services">Services</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
    </div>
    <a className="btn btn-light fw-bold contactmebtn" href='#contact-me'>Contact Me</a>
  </header>

</>
)
}

export default Navbar