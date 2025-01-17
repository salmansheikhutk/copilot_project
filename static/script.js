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
