import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count, setwat] = useState();

    

    useEffect(()=>{
      setwat('first')
    },[])

  return (
    <div>
        
      <button className='ms-5 mt-5'  onClick={()=>{setwat('first')}} style={{color:count==='first'?'red':'violet',backgroundColor:count==='first'?'blue':'red',fontSize:'50px'}}>first</button>
      <button className='ms-5 mt-5'  onClick={()=>{setwat('second')}}>2</button>
      <button className='ms-5 mt-5'  onClick={()=>{setwat('thirs')}}>3</button>

{
  count === "first"?<>Aman</>:<></>
}


{
  count === "second"?<p style={{color:'red'}}> ishu</p>:<p></p>
}


{
  count === "thirs"?<> mohit</>:<></>
}






    </div>
  )
}

export default Counter
