

let point = 0;
        const allImages = [];

        // Load dice images into an array
        for (let i = 0; i < 6; i++) {
            allImages[i] = `url('Dice/${i + 1}.png')`;
        }

        // Set initial background images for dice elements
        document.getElementById("pbDieImage1").style.backgroundImage = allImages[0];
        document.getElementById("pbDieImage2").style.backgroundImage = allImages[0];
        // Disable the "Play Again" button initially
        document.getElementById("btnPlayAgain").disabled = true;

        // Function to handle dice rolling
        function rollDice() {
            document.getElementById("btnRollDice").disabled = true;
            document.getElementById("btnPlayAgain").disabled = true;
            animateDice();
        }

        // Function to animate the dice rolling
        function animateDice() {
            let die1Value = 0;
            let die2Value = 0;

            // Function to update the dice images
            function updateImages() {
                document.getElementById("pbDieImage1").style.backgroundImage = allImages[die1Value];
                document.getElementById("pbDieImage2").style.backgroundImage = allImages[die2Value];
            }

            // Function to simulate sleep for animations
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            /* Asynchronous function to start the dice rolling animation */
            async function startAnimation() {
                for (let i = 0; i < 20; i++) {
                    /* Roll the first die and adjust
                     for array indexing (0-based) */
                    die1Value = rollDie() - 1; 
                    /* Roll the second die and adjust 
                    for array indexing (0-based) */
                    die2Value = rollDie() - 1; 
                     /* Update the dice images in the UI */
                    updateImages();
                    /* Pause for 100 milliseconds 
                    to create an animation effect */
                    await sleep(100); 
                }

                /* Calculate the sum of the dice values */
                const sum = die1Value + die2Value + 2; 

                /* Update the final dice images in the UI */
                updateImages(); 

                /* Enable the "Roll Dice" button after animation */
                document.getElementById("btnRollDice").disabled = false; 

                /* Process the result of the dice roll */
                processResult(sum); 
            }

            // Start the animation
            startAnimation();
        }

        // Function to process the result of a dice roll
        function processResult(sum) {
            // Check if the point is not set (first roll)
            if (point === 0) {
                // Check if the sum of the dice is 7 or 11
                if (sum === 7 || sum === 11) {
                    document.getElementById("lblResult").innerHTML = "Congratulations! You win!";
                    document.getElementById("btnPlayAgain").disabled = false;
                    document.getElementById("btnRollDice").disabled = true;
                } 
                // Check if the sum of the dice is 2, 3, or 12 (Craps)
                else if (sum === 2 || sum === 3 || sum === 12) {
                    document.getElementById("lblResult").innerHTML = "Sorry, you lose! Better luck next time!";
                    document.getElementById("btnPlayAgain").disabled = false;
                    document.getElementById("btnRollDice").disabled = true;
                } 
                // If neither, set the point and instruct to roll again
                else {
                    document.getElementById("lblResult").innerHTML = `Point is set to ${sum}.<br>Roll again to match the point or roll a 7 to lose.`;
                    point = sum; // Set the point for subsequent rolls
                }
            } 
            // Subsequent rolls
            else {
                // Check if the sum of the dice matches the point
                if (sum === point) {
                    document.getElementById("lblResult").innerHTML = "Congratulations! You matched the point. You win!";
                    point = 0; // Reset point for the next game
                    document.getElementById("btnPlayAgain").disabled = false;
                    document.getElementById("btnRollDice").disabled = true;
                } 
                // Check if the sum of the dice is 7
                else if (sum === 7) {
                    document.getElementById("lblResult").innerHTML = "Sorry, you rolled 7! You lose!";
                    point = 0; // Reset point for the next game
                    document.getElementById("btnPlayAgain").disabled = false;
                    document.getElementById("btnRollDice").disabled = true;
                } 
                // If neither, instruct to roll again
                else {
                    document.getElementById("lblResult").innerHTML = "Roll again to match the point or roll 7 to lose";
                }
            }
        }


        // Function to simulate rolling one six-sided die
        function rollDie() {
            return Math.floor(Math.random() * 6) + 1;
        }

        // Function to reset the game and prepare for a new roll
        function playAgain() {
            // Reset the point to 0 for a new game
            point = 0;

            // Update the result label with a starting message
            document.getElementById("lblResult").innerHTML = "Press 'Roll Dice' to start the game.";

            // Disable the 'Play Again' button until a new game is started
            document.getElementById("btnPlayAgain").disabled = true;

            // Enable the 'Roll Dice' button for 
            // the player to initiate a new roll
            document.getElementById("btnRollDice").disabled = false;
    
            // Reset the background images of both dice to the initial image
            document.getElementById("pbDieImage1").style.backgroundImage = allImages[0];
            document.getElementById("pbDieImage2").style.backgroundImage = allImages[0];
        }