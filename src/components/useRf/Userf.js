import React, { useRef, useState } from 'react'

const Userf = () => {


    const [data,setdata] = useState("aman sharma");
    const RefText = useRef();
    
    const Refresh = ()=>{
        setdata('')
        RefText.current.focus()
    }
    const Update = ()=>{
        RefText.current.value="ishu"
        RefText.current.style.color = "green"
        
    }



  return (
    <div className='p-5'>
      <h1>{data}</h1>



      <input type='text' ref={RefText} value={data} onChange={(e)=>{setdata(e.target.value)}}/>

        <button onClick={()=>{Refresh()}}>Click</button>
        <button onClick={()=>{Update()}}>Update</button>


    </div>
  )
}

export default Userf
