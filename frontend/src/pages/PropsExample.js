import React from 'react';

// A simple functional component that accepts a prop and displays it
// The component receives a prop called 'message' and displays it inside an <h1> element
function PropsExample({ message }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="title">Props Example</h1>
            <p>{message}</p>
        </div>
    );
}

export default PropsExample;
