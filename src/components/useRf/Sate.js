import React, { useRef, useState } from 'react'

const Sate = () => {
    const[data ,setdata]=useState("aman")

    const sate = useRef()
    const refersh=()=>{
        setdata(" ") 
        

       sate.current.focus()
    }

    const update=()=>{
        sate.current.value="ankit"
        sate.current.style.color="red"
        sate.current.style.backgroundColor="black"
          
    }

  return (
    <div>



<h1> UseRef Hook </h1>
<input ref={sate}   value={data}    onChange={(e)=>{setdata(e.target.value)}}/>

<button  onClick={()=>{refersh()}}>change</button>
<button  onClick={()=>{update()}}>update</button>

    </div>
  )
}

export default Sate