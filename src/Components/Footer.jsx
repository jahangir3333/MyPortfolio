import React from 'react'

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
      <a href="#">FAQ</a>
      <a href="#">Services</a>
      <a href="#">About Me</a>
      <a href="#">Contact</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div class="rights-reserved">
      <p style={{fontSize:'10px'}}> 2026 Md Jahangir Hussain | All Rights Reserved</p>
    </div>
  </footer>
    </>
  )
}

export default Footer