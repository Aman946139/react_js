import React, { useCallback, useState } from 'react'
import Usecall2 from './Usecall2'

const Usecall = () => {
    const [currentvalue,setvalue] = useState(0)
    const [currentvalue2,setvalue2] = useState(0)

    // const passfun = ()=>{

    // }
    const passfun = useCallback(()=>{

    },[currentvalue2])
  return (
    <div>
        <Usecall2 mkey={passfun}/>
      <h1>{currentvalue}</h1>
      <button onClick={()=>{setvalue(currentvalue+1)}}>click me</button>
      <h1>{currentvalue2}</h1>
      <button onClick={()=>{setvalue2(currentvalue2+1)}}>click me</button>
    </div>
  )
}

export default Usecall
