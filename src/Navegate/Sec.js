import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sec = () => {
  const Thir = useNavigate();
const mav =()=>{
Thir('/Thir')
}
  return (
    <div>
        <h1>sec 2

          <button onClick={()=>{mav()}}>my button</button>
        </h1>
    </div>
  )
}

export default Sec