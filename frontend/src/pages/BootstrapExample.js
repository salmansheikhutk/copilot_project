import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function BootstrapExample() {
    return (
        <div className="container mt-5">
            {/* A simple Bootstrap card component */}
            <div className="card">
                <div className="card-header">
                    Bootstrap Card
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">This is a simple example of a Bootstrap card component. You can use Bootstrap classes to style your components easily.</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>

            {/* A simple Bootstrap button component */}
            <div className="mt-4">
                <button type="button" className="btn btn-success">Success Button</button>
            </div>

            {/* A simple Bootstrap alert component */}
            <div className="mt-4">
                <div className="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
            </div>
        </div>
    );
}

export default BootstrapExample;
