import React, { useEffect, useState } from 'react';

function DataExample() {
    const [exampleData, setExampleData] = useState('Loading...');
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        // Fetch example data from the Flask backend
        fetch('/get_example')
            .then(response => response.json())
            .then(data => setExampleData(data.message))
            .catch(error => console.error('Error fetching example data:', error));

        // Fetch all data from the test_table
        fetch('/get_all_data')
            .then(response => response.json())
            .then(data => setAllData(data))
            .catch(error => console.error('Error fetching all data:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React + Flask Example</h1>
            <p>{exampleData}</p>
            <h2>All Data from test_table:</h2>
            <ul>
                {allData.map((row, index) => (
                    <li key={index}>{JSON.stringify(row)}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataExample;
