import React from 'react'

const Button = () => {
    return (
        <div className='flex px-20 -my-14 justify-start   py-10 bg-white'>
            <div className='flex  gap-x-1  '>
                <div className='px-4 py-2 text-center text-white bg-red-500'>1</div>
                <div className='px-4 py-2 text-center text-orange-400  hover:bg-red-500  hover:text-white  border border-orange-500'>2</div>
                <div className='px-4 py-2 text-center text-orange-400  hover:bg-red-500 hover:text-white border border-orange-500'>→</div>
            </div>
        </div>
    )
}

export default Button
