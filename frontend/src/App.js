import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import AppRoutes from './routes/AppRoutes'; // Import AppRoutes

function App() {
    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
}

// export default App allows this component to be imported and used in other files.
export default App;