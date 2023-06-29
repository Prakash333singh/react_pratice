import React from 'react'
import logo from "../assets/print-1-1.svg"
const Nav = () => {
    return (
        <header className='h-24 sticky  flex justify-start items-center ml-10'>
            <div>
                <img src={logo} />
            </div>

        </header>
    )
}

export default Nav
