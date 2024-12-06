// Function to add an input field to the game interface
function addInput() {
    var input = document.createElement('input'); // Create a new input element

    // Set input field properties
    input.type = 'text';
    input.style.position = 'fixed'; // Position the input fixed on the screen
    input.style.left = 508 + 'px'; // Set the left position of the input field
    input.style.top = 640 + 'px'; // Set the top position of the input field
    input.style.background = 'linear-gradient(50deg, #00008B, #9400D3)'; // Set a gradient background
    input.style.width = 66 + 'px'; // Set the width of the input field
    input.style.height = 50 + 'px'; // Set the height of the input field
    input.style.border = 'groove'; // Add a groove border to the input field
    input.style.borderRadius = 7 + 'px'; // Add rounded corners to the border
    input.style.font = '30px Verdana'; // Set the font and size for the text inside the input

    // Add an event listener for when the user presses Enter
    input.onkeydown = handleEnter;

    document.body.appendChild(input); // Append the input to the body of the document

    input.focus(); // Automatically focus on the input field
}

// Function to handle the Enter key press event
function handleEnter() {
    // Check if the input value is exactly 3 characters long
    if (this.value.length === 3) {
        document.body.removeChild(this); // Remove the input field after it's used

        // Extract and format the values from the input
        var n = this.value[1].toUpperCase(); // The letter is the second character of the input
        const pos0 = Number(this.value[0]) - 1; // The row position is the first character (adjusted by -1 for 0-based index)
        const num = Number(this.value[2]); // The number is the third character of the input

        // Validate the input values
        if (isNaN(pos0) || isNaN(num) || !(n in InputKeys)) {
            play(); // If invalid, play a sound or effect
            return; // Exit the function
        }

        // Get the column position from the InputKeys object
        const pos1 = InputKeys[n];
        // Check if the move is valid
        const res = check_cell(BOARD_9, num, [pos0, pos1]);

        // If the move is valid, update the board
        if (res) {
            BOARD_9[pos0][pos1] = num; // Update the cell with the new number

            // Check if the game is won
            if (isWin(BOARD_9)) {
                EndMessage('./imgs/endVictor.png', 1.5, '40%'); // Show victory message
                Restart(); // Restart the game

            } else {
                draw_cells(); // Redraw the game board
                play(); // Play a sound or effect for valid input

            }

        } else {
            EndMessage('./imgs/endGover.png', 1.5, '40%'); // Show game over message
            Restart(); // Restart the game
        }
    }
}

// Start the game by calling the play function
play();

// Function to play a sound or effect
function play() {
    addInput(); // Add a new input field to the game interface
}
