// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the form element
    const form = document.querySelector('form');
    
    // Add an event listener to handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        alert('Form submitted!'); // Display an alert message
    });

    // Select the name input field
    const nameInput = document.getElementById('name');
    
    // Add an event listener to log the name input value
    nameInput.addEventListener('input', () => {
        console.log(`Name: ${nameInput.value}`);
    });

    // Select the email input field
    const emailInput = document.getElementById('email');
    
    // Add an event listener to log the email input value
    emailInput.addEventListener('input', () => {
        console.log(`Email: ${emailInput.value}`);
    });
});
