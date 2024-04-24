import React, { createContext } from 'react'
import First from './First'




const contact = createContext()
const out = createContext()
const UseCont = () => {


    const FirstName="Aman Sharma"
    const NestName = "ishu sharma"
  return (
    <div>

<contact.Provider value={FirstName}>
  <out.Provider value={NestName}>

    <First/>
</out.Provider>
</contact.Provider>



    </div>
  )
}

export default UseCont

export {contact,out}