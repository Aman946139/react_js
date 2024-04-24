// import React, { useCallback, useState } from 'react'
// import Callold from './Callold'

// const Callnew = () => {
//     const[fan,setfan] = useState(0)
//     // const passfun = useCallback(()=>{

//     // },[])

//     const passfun= () =>{
//             card
//     }
//   return (
//     <div>

      

// <Callold mkey={passfun}/>

//       <h1>{fan}</h1>
//       <button onClick={()=>{setfan(fan+1)}}>click me</button>




    
//     </div>
//   )
// }

// export default Callnew





import React, { useCallback, useState } from 'react'
import Lottie from 'react-lottie-player'


import lottieJson from './Animation.json'

const Callnew = () => {

    const [raf,setraf] = useState(0)
    const [ass, setass]= useState(0)

    const fass = useCallback(()=>{

    },[ass])

  return (
    <div>


<Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: "", height: 500 }}
    />
    </div>
  )
}

export default Callnew

