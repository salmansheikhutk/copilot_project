import React from 'react';
import './Header.css';
import { FaHome, FaBars } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <FaHome /> {/* Home icon */}
                    </Link>
                    <div className="dropdown ms-auto">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaBars /> {/* Menu icon */}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/simple-function">Simple Function</Link></li>
                            <li><Link className="dropdown-item" to="/props-example">Props Example</Link></li>
                            <li><Link className="dropdown-item" to="/simple-state">Simple State</Link></li>
                            <li><Link className="dropdown-item" to="/event-handling">Event Handling</Link></li>
                            <li><Link className="dropdown-item" to="/use-effect-api">Use Effect API</Link></li>
                            <li><Link className="dropdown-item" to="/use-context">Use Context</Link></li>
                            <li><Link className="dropdown-item" to="/conditional-rendering">Conditional Rendering</Link></li>
                            <li><Link className="dropdown-item" to="/list-example">List Example</Link></li>
                            <li><Link className="dropdown-item" to="/bootstrap-example">Bootstrap Example</Link></li>
                            <li><Link className="dropdown-item" to="/checkout-example">Checkout Example</Link></li>
                            <li><Link className="dropdown-item" to="/redux-example">Redux Example</Link></li> {/* Add ReduxExample to the menu */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
