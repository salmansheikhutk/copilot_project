import React from 'react';
import './App.css';
import PropsExample from './components/PropsExample';
import SimpleFunction from './components/SimpleFunction';
import SimpleState from './components/SimpleState';
import EventHandling from './components/EventHandling';

// The App function is a React component that serves as the root component of the application.
// It passes a prop to the PropsExample component and calls the SimpleFunction, SimpleState, and EventHandling components.
function App() {
    return (
        <div className="App">
            {/* Calling the SimpleFunction component */}
            <SimpleFunction />
            {/* Passing a prop called 'message' to the PropsExample component */}
            <PropsExample message="Hello, this is a prop!" />
            {/* Calling the SimpleState component */}
            <SimpleState />
            {/* Calling the EventHandling component */}
            <EventHandling />
        </div>
    );
}

// export default App allows this component to be imported and used in other files.
export default App;

// Note: In this file, we use function declarations (e.g., function App()) instead of arrow functions (e.g., const App = () => {}).
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Arrow functions are not hoisted and are often used for shorter functions or when using 'this' is not required.