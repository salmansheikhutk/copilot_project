import React from 'react';
import './Header.css';
import { FaHome, FaBars } from 'react-icons/fa'; // Import icons from react-icons

function Header({ setActiveComponent }) {
    return (
        <header className="header">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-brand btn btn-link" onClick={() => setActiveComponent('', 'Welcome! Please select a page from the dropdown menu.')}>
                        <FaHome /> {/* Home icon */}
                    </button>
                    <div className="dropdown ms-auto">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaBars /> {/* Menu icon */}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('SimpleFunction', 'Simple Function')}>Simple Function</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('PropsExample', 'Props Example')}>Props Example</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('SimpleState', 'Simple State')}>Simple State</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('EventHandling', 'Event Handling')}>Event Handling</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('UseEffectAPI', 'Use Effect API')}>Use Effect API</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('UseContextProvider', 'Use Context')}>Use Context</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('ConditionalRendering', 'Conditional Rendering')}>Conditional Rendering</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('ListExample', 'List Example')}>List Example</button></li>
                            <li><button className="dropdown-item btn btn-link" onClick={() => setActiveComponent('BootstrapExample', 'Bootstrap Example')}>Bootstrap Example</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
