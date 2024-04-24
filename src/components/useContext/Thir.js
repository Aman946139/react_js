import React, { useContext } from 'react'
import {contact,out} from '../useContext/UseCont'
const Thir = () => {
    const ontact=useContext(contact)
    const all=useContext(out)
  return (
    <div>


<h1>{ontact}</h1>
<h1>{all}</h1>
    </div>
  )
}

export default Thir
