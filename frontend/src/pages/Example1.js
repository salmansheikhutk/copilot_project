import React, { useState } from 'react';
import './Example1.css'; // Import custom CSS for styling

function amazingFunction() {
    const button = document.querySelector('button');
    button.style.backgroundColor = 'blue';
}


const Example1 = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <button>Make this something amazing</button>
        </div>
    )
};

export default Example1;