import React, { useState } from 'react';

// A simple functional component that uses state to implement a counter
function SimpleState() {
    // Declare a state variable called 'count' and a function to update it called 'setCount'
    // useState(0) initializes the state variable with the value 0
    const [count, setCount] = useState(0);

    // A function to increment the count by 1
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="title">Simple State</h1>
            {/* Display the current count */}
            <h1>Count: {count}</h1>
            {/* A button to increment the count when clicked */}
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default SimpleState;
