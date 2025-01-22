import React, { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        console.log("Fetching example data from the backend...");
        // Fetch example data from the Flask backend and print to console log
        fetch('/get_example')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched example data:", data.message);
            })
            .catch(error => {
                console.error('Error fetching example data:', error);
                console.log("Didn't run the fetch successfully.");
            });
    }, []);

    return (
        <div className="container">
            <h1>Check the console for fetched example data</h1>
        </div>
    );
}

export default App;
