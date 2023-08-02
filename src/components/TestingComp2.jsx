import React from 'react'
import { useState } from 'react'

const TestingComp2 = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count == 0) {
            setCount(0);
        }
        else {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className='mt-5'>
                <p className='text-xl'>REACT CLASS FUNCTIONAL EXAMPLE</p>
                The Count is {count}
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 ml-2 rounded-xl mt-2" onClick={increment}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 ml-2 rounded-xl mt-2" onClick={decrement}>Decrement</button>
        </>
    )
}

export default TestingComp2