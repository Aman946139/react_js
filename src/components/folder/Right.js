import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
const Right = () => {
    const [count, setwat] = useState();
    useEffect(() => {
        setwat('first')
    }, [])
    
    return (
        <div>



            <div className='container' style={{display:count==='first'?'block':'none'}}>
                <div className='row'>
                    <div className='col mt-5' >
                    
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">sing up</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={() => { setwat('sec') }} >Submit</button>
                        

                    </div>


                </div>
                <div class="mb-3" style={{display:count==='sec'?'block':'none'}}>
            <FaArrowLeft />
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />

                <button type="submit" class="btn btn-primary" onClick={() => { setwat('first') }}>Submit</button>
            </div>


            </div>


           

        </div>
    )
}

export default Right
