import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState('Loading...');

    useEffect(() => {
        //fetch('http://127.0.0.1:5000/get_example')  // Call Flask API
        fetch('/get_example')
            .then(response => response.json())
            .then(data => setData(data.message)) // Update state with the response
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React + Flask Example</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;

