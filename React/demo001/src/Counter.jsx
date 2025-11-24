import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increaseCounter = () =>{
        setCounter(counter+1)
    }
    const decreaseCounter = () =>{
        setCounter(counter-1)
    }
    return (
        <div>
            {counter}<br />
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    );
};

export default Counter;