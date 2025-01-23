import React from 'react';

// A simple functional component that handles a button click event
function EventHandling() {
    // A function to handle the button click event
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* A button that triggers the handleClick function when clicked */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default EventHandling;
