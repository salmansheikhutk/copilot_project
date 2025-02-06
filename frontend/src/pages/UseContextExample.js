import React, { createContext, useContext } from 'react';

// Create a Context with a default value
const MyContext = createContext('Default Value');

// A simple functional component that uses the Context
function UseContextExample() {
    // Use the useContext hook to access the Context value
    const value = useContext(MyContext);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="title">Use Context</h1>
            {/* Display the Context value */}
            <h1>Context Value: {value}</h1>
        </div>
    );
}

// A wrapper component to provide the Context value
function UseContextProvider() {
    return (
        // Provide a custom value to the Context
        <MyContext.Provider value="Hello from Context!">
            <UseContextExample />
        </MyContext.Provider>
    );
}

export default UseContextProvider;
