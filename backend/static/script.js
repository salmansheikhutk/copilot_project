/**
 * This function checks if the clicked button corresponds to the correct answer.
 * @param {HTMLElement} button - The button element that was clicked.
 * @param {boolean} isCorrect - A boolean indicating if the clicked button is the correct answer.
 */
function checkAnswer(button, isCorrect) {
    // If the button has already been clicked, do nothing
    if (button.classList.contains('answered')) {
        return;
    }

    // Mark the button as answered
    button.classList.add('answered');

    // If the answer is correct, change the button's background color to green
    if (isCorrect) {
        button.style.backgroundColor = 'lightgreen';
    } else {
        // If the answer is incorrect, change the button's background color to red
        button.style.backgroundColor = 'lightcoral';
    }

    // Disable all buttons for this question
    // The parent element of the button contains all the buttons for the current question
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}

/**
 * Function to make a GET request to the server.
 * This function is triggered when the "Make GET Request" button is clicked.
 */
function makeGetRequest() {
    fetch('/get_example')
        .then(response => response.text())
        .then(data => {
            // Display the response data in the paragraph with id "getResponse"
            document.getElementById('getResponse').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

/**
 * Function to handle the POST request form submission.
 * This function is triggered when the form with id "postForm" is submitted.
 */
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    fetch('/post_example', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Display the response data in the paragraph with id "postResponse"
        document.getElementById('postResponse').innerText = data;
    })
    .catch(error => console.error('Error:', error));
});

/**
 * Function to handle the POST request form submission for adding a new name.
 * This function is triggered when the form with id "postNameForm" is submitted.
 */
document.getElementById('postNameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    fetch('/post_name', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Display the response data in the paragraph with id "postNameResponse"
        document.getElementById('postNameResponse').innerText = data;
    })
    .catch(error => console.error('Error:', error));
});
