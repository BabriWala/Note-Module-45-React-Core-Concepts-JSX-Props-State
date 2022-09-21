import React, { useState } from 'react';




const Count = () => {
    const [count, setCount] = useState(0);
    // const increaseCount = ()=>{
    //     const newCount = count + 1;
    //     setCount(newCount)
    // }
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = ()=>{
        if(count === 0){
            setCount(0)
        }else{
            const newCount = count - 1;
            setCount(newCount)
        }
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
};

export default Count;