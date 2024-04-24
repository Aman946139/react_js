import React from 'react'
import New from './New'
import logo from '../img/logo192.png'

const Fale = () => {
    const far = {
        backgroundColor:"red",
        color: "white",
        border:"5px solid black",
        width:"400px",
        borderRadius: "5rem",
        

    }
  return (
    <div>


      <img src={logo} alt="image"/>
      <h1 style={far}>Aman sharma</h1>
      
      <New name="ravi"/>
      <New for={far}/>

    </div>
  )
}

export default Fale
