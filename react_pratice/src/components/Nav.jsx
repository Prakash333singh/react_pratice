import React from 'react'
import logo from "../assets/print-1-1.svg"
const Nav = () => {
    return (
        <header className='h-24 sticky flex items-center bg-gray-100 mb-10'>
            <div className=' ml-10'>
                <img src={logo} />
            </div>

        </header>
    )
}

export default Nav
