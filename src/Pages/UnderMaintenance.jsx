import React from 'react'
import Navbar from '../Components/Navbar'

function UnderMaintenance() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid bg-secondary-subtle px-0 py-4" style={{height:'100vh'}}>
    <h1 className='text-center'>Under Maintenance</h1>
    </div>
    </>
  )
}

export default UnderMaintenance