import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'

const Locat = () => {
    const location = useLocation()

    return (
        <div>


            <NavLink to={'/'}>
                <h1 className={`${location.pathname=='/'?"text-success":''}`}>Home </h1>
            </NavLink>
            

            <NavLink to={'/Next'}>
                <h1 className={`${location.pathname=='/Next'?"text-success":''}`}>contact</h1>
            </NavLink>
        </div>
    )
}

export default Locat