import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer class="text-center bg-dark text-white p-3">
    <div class="logo-social mx-auto">
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-square-instagram"></i>
      <i class="fa-brands fa-square-whatsapp"></i>
    </div>
    <div class="menu-buttons footer-links d-flex justify-content-center m-3">
      <Link to="#">FAQ</Link>
      <Link to="#">Services</Link>
      <Link to="#">About Me</Link>
      <Link to="#">Contact</Link>
      <Link to="#">Privacy Policy</Link>
    </div>
    <div class="rights-reserved">
      <p style={{fontSize:'10px'}}> 2026 Md Jahangir Hussain | All Rights Reserved</p>
    </div>
  </footer>
    </>
  )
}

export default Footer