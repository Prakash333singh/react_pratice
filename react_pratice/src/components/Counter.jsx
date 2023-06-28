import React from 'react'

function counter() {
    let number = 0;
    function handleClick() {
        number++;
    }

    return (
        <div>
            <h1 className='text-2xl text-white'>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default counter
