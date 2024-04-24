import React, { useRef, useState } from 'react'

const Face = () => {
  const [data, setdata] = useState('aman')
  console.log(data)


const canva = useRef()

  const Reafrace = () => {
setdata(' ')
canva.current.focus()
  }
  const update = () => {
canva.current.value="ishu"
canva.current.style.color="red"
  }
  return (
    <div>

      <h1>{data}</h1> 

      <input ref={canva} type='text' value={data}  onChange={(e) => { setdata(e.target.value) }} />


      <button onClick={() => { Reafrace() }}>change</button>
      <button onClick={() => { update() }}>update</button>



    </div>
  )
}

export default Face