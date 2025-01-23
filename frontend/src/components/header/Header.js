import React from 'react';
import './Header.css';

function Header({ setActiveComponent }) {
    return (
        <header className="header">
            <nav>
                <div className="dropdown">
                    <button className="dropbtn">Pages</button>
                    <div className="dropdown-content">
                        <a href="#simple-function" onClick={() => setActiveComponent('SimpleFunction', 'Simple Function')}>Simple Function</a>
                        <a href="#props-example" onClick={() => setActiveComponent('PropsExample', 'Props Example')}>Props Example</a>
                        <a href="#simple-state" onClick={() => setActiveComponent('SimpleState', 'Simple State')}>Simple State</a>
                        <a href="#event-handling" onClick={() => setActiveComponent('EventHandling', 'Event Handling')}>Event Handling</a>
                        <a href="#use-effect-api" onClick={() => setActiveComponent('UseEffectAPI', 'Use Effect API')}>Use Effect API</a>
                        <a href="#use-context" onClick={() => setActiveComponent('UseContextProvider', 'Use Context')}>Use Context</a>
                        <a href="#conditional-rendering" onClick={() => setActiveComponent('ConditionalRendering', 'Conditional Rendering')}>Conditional Rendering</a>
                        <a href="#list-example" onClick={() => setActiveComponent('ListExample', 'List Example')}>List Example</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
