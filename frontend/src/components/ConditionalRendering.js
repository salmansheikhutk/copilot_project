import React, { useState } from 'react';

// A simple functional component that demonstrates conditional rendering
function ConditionalRendering() {
    // Declare a state variable called 'isVisible' and a function to update it called 'setIsVisible'
    const [isVisible, setIsVisible] = useState(true);

    // A function to toggle the visibility of the message
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* A button to toggle the visibility of the message */}
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Message
            </button>
            {/* Conditionally render the message based on the value of 'isVisible' */}
            {isVisible && <h1>Hello, this is a conditionally rendered message!</h1>}
        </div>
    );
}

export default ConditionalRendering;
