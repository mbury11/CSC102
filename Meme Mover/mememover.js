// Declare variables for meme image and movement interval
let meme = document.getElementById('meme');
let interval;

// Function to start moving the meme image
function startMoving() {
    // Disable the Start button and enable the Stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    // Move the meme image every 100 milliseconds
    interval = setInterval(moveMeme, 100);
}

// Function to stop moving the meme image
function stopMoving() {
    // Disable the Stop button and enable the Start button
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;

    // Clear the interval to stop moving the meme
    clearInterval(interval);
}

// Function to move the meme image around the screen
function moveMeme() {
    // Generate random positions for the meme image
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    meme.style.left = x + 'px';
    meme.style.top = y + 'px';
}