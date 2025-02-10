 // Get the form element
const form = document.getElementById('checker');
// Get the result div
const resultDiv = document.getElementById('result');

// Initialize a loop for user input
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    // Get user input
    const input = document.getElementById('userInput').value;
    // Remove spaces and convert to lowercase
    const cleanedInput = input.replace(/\s+/g, '').toLowerCase();
    // Check if the input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    // Display result
    resultDiv.innerHTML = isPalindrome ? 
        `<p>${input} is a palindrome!</p>` : 
        `<p>${input} is not a palindrome.</p>`;
    // Clear input field
    document.getElementById('userInput').value = '';
};

// Add event listeners for audio controls
// Play audio when the play button is clicked
document.getElementById('playAudio').addEventListener('click', function() {
    document.getElementById('backgroundSound').play();
});
// Stop audio when the stop button is clicked
document.getElementById('stopAudio').addEventListener('click', function() {
        document.getElementById('backgroundSound').pause();
    });