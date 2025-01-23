import React from 'react';
import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function Header({ setActiveComponent }) {
    return (
        <header className="header">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={() => setActiveComponent('', 'Welcome! Please select a page from the dropdown menu.')}>Home</a>
                    <div className="dropdown ms-auto">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#simple-function" onClick={() => setActiveComponent('SimpleFunction', 'Simple Function')}>Simple Function</a></li>
                            <li><a className="dropdown-item" href="#props-example" onClick={() => setActiveComponent('PropsExample', 'Props Example')}>Props Example</a></li>
                            <li><a className="dropdown-item" href="#simple-state" onClick={() => setActiveComponent('SimpleState', 'Simple State')}>Simple State</a></li>
                            <li><a className="dropdown-item" href="#event-handling" onClick={() => setActiveComponent('EventHandling', 'Event Handling')}>Event Handling</a></li>
                            <li><a className="dropdown-item" href="#use-effect-api" onClick={() => setActiveComponent('UseEffectAPI', 'Use Effect API')}>Use Effect API</a></li>
                            <li><a className="dropdown-item" href="#use-context" onClick={() => setActiveComponent('UseContextProvider', 'Use Context')}>Use Context</a></li>
                            <li><a className="dropdown-item" href="#conditional-rendering" onClick={() => setActiveComponent('ConditionalRendering', 'Conditional Rendering')}>Conditional Rendering</a></li>
                            <li><a className="dropdown-item" href="#list-example" onClick={() => setActiveComponent('ListExample', 'List Example')}>List Example</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
