import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import Header from './components/header/Header';
import PropsExample from './pages/PropsExample';
import SimpleFunction from './pages/SimpleFunction';
import SimpleState from './pages/SimpleState';
import EventHandling from './pages/EventHandling';
import UseEffectAPI from './pages/UseEffectAPI';
import UseContextProvider from './pages/UseContextExample';
import ConditionalRendering from './pages/ConditionalRendering';
import ListExample from './pages/ListExample';

// The App function is a React component that serves as the root component of the application.
function App() {
    const [activeComponent, setActiveComponent] = useState('');
    const [title, setTitle] = useState('Welcome! Please select a page from the dropdown menu.');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'SimpleFunction':
                return <SimpleFunction />;
            case 'PropsExample':
                return <PropsExample message="Hello, this is a prop!" />;
            case 'SimpleState':
                return <SimpleState />;
            case 'EventHandling':
                return <EventHandling />;
            case 'UseEffectAPI':
                return <UseEffectAPI />;
            case 'UseContextProvider':
                return <UseContextProvider />;
            case 'ConditionalRendering':
                return <ConditionalRendering />;
            case 'ListExample':
                return <ListExample />;
            default:
                return null;
        }
    };

    const handleSetActiveComponent = (component, title) => {
        setActiveComponent(component);
        setTitle(title);
    };

    return (
        <div className="App">
            {/* Calling the Header component */}
            <Header setActiveComponent={handleSetActiveComponent} />
            <div className="content">
                {/* Display the title */}
                <h1 className="title">{title}</h1>
                {/* Render the active component */}
                {renderComponent()}
            </div>
        </div>
    );
}

// export default App allows this component to be imported and used in other files.
export default App;

// Note: In this file, we use function declarations (e.g., function App()) instead of arrow functions (e.g., const App = () => {}).
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Arrow functions are not hoisted and are often used for shorter functions or when using 'this' is not required.