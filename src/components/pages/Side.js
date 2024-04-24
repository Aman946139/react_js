import React from 'react'
import { NavLink } from 'react-router-dom'
import './All.css'
const Side = () => {
  return (
    <div className='mt-5 aman' style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"80vh",backgroundColor:"black",color:"white"}}>
      <h1>logo</h1>
        <NavLink to={'/'}>
       <h1 style={{color:"white"}}> Home</h1>
       </NavLink >
       <NavLink to={'/About'}>
       <h1 style={{color:"white"}}>About</h1>
       </NavLink>
       <NavLink to={'/Contcat' }>
       <h1 style={{color:"white"}}>Contcat</h1>
       </NavLink>
      
       
    </div>
  )
}

export default Side