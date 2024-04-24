import React from 'react'
import {  NavLink, useLocation } from 'react-router-dom'

const Five = () => {
    const location = useLocation()


    // Object Destructuring 
    const { pathname } = useLocation()

    return (
        <div>
            <div className="main">
                {pathname !== " " ? (
                    <aside>
                        <NavLink to="/Five" className="product-btn">
                            <button>click</button>
                        </NavLink>
                    </aside>
                ) : null}
            </div>
        </div>
    )
}

export default Five