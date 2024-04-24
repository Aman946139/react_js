import React from 'react'
import { useNavigate } from 'react-router-dom'

const First = () => {
    const Nave=useNavigate();
    const cat = ()=>{
        Nave('/Sec')
    }
  return (
    <div> <h1>first 1</h1>
        
        <button onClick={()=>{cat()}}>my button </button>
        
         </div>
  )
}

export default First