// Select the canvas element from the DOM
var canvas = document.querySelector('canvas');

// Define the game dimensions
var GAME = {
    width: 1400, height: 840 // Set the width and height of the game area
}

// Select a random board layout from the available options
var BOARD_9 = all9[Math.floor(Math.random() * all9.length)];

// Define the properties for the grid cells and other game settings
var CELLS = {
    x: 250, // Starting X position of cells
    y: 130, // Starting Y position of cells
    width: 40, // Width of each cell
    height: 40, // Height of each cell
    color: 'rgba(255,255,255,0.76)', // Color for the cells
    size_b: BOARD_9.length, // Size of the board (number of rows/columns)
    hole: 50, // The space between cells
    gap: 0, // Counter for the gaps between cells
    raiseGap: 10, // The extra gap added after each row
    control: 1, // Control variable for positioning
    ruleX: 870, // X position for the rule text
    ruleY: 36 // Y position for the rule text
}

// Set the canvas dimensions
canvas.width = GAME.width;
canvas.height = GAME.height;

// Get the 2D drawing context for the canvas
let canvasContext1 = canvas.getContext('2d');

// Function to draw the cells on the canvas
function draw_cells() {
    // Loop through each row
    for (let i = 0; i < CELLS.size_b; i++) {

        // Loop through each column
        for (let j = 0; j < CELLS.size_b; j++) {

            CELLS.x += CELLS.hole; // Add space between cells

            // Add extra gap every third column
            if (CELLS.gap % 3 === 0) {
                CELLS.x += CELLS.raiseGap;
            }

            // Draw letters on top of columns
            if (CELLS.control === 1) {
                fieldsLet(LETTER[j], CELLS.y);
            }

            CELLS.gap++; // Increase the gap counter

            // Draw the current cell
            drawB1(BOARD_9[i][j]);

        }

        // Draw numbers on the left side of the grid
        fieldsNum(NUMS[i], 282);

        // Add extra gap every third row
        if (CELLS.gap % 27 === 0) {
            CELLS.y += CELLS.raiseGap;
        }

        CELLS.x = 250; // Reset the X position for the next row
        CELLS.y += CELLS.hole; // Move to the next row
        CELLS.control++; // Increment the control counter

    }
    // Reset the initial positions after drawing the entire grid
    CELLS.x = 250;
    CELLS.y = 130;
}

// Function to draw individual cells on the board
function drawB1(numb) {

    // Set the color based on the cell value (filled or empty)
    if (numb) {
        canvasContext1.fillStyle = 'rgb(252, 251, 251)'; // Light color for filled cells
    } else {
        canvasContext1.fillStyle = 'rgb(132,232,132)'; // Green for empty cells
    }

    // Draw the cell rectangle
    canvasContext1.fillRect(CELLS.x, CELLS.y, CELLS.width, CELLS.height);

    // Set the font and color for the number inside the cell
    canvasContext1.font = '37px Arial';
    canvasContext1.fillStyle = 'rgb(0,0,0)';
    canvasContext1.fillText(numb, CELLS.x + 10, CELLS.y + 34); // Draw the number in the center of the cell
}

// Function to draw the letter labels on the top of columns
function fieldsLet(letter, y) {
    canvasContext1.font = '37px Copperplate'; // Set font style for the letters
    canvasContext1.fillStyle = 'rgb(183,1,255)'; // Set the color for the letters
    canvasContext1.fillText(letter, CELLS.x + 7, y - 8); // Draw the letter at the specified position
}

// Function to draw the number labels on the left of rows
function fieldsNum(num, x) {
    canvasContext1.font = '37px Copperplate'; // Set font style for the numbers
    canvasContext1.fillStyle = 'rgb(183,1,255)'; // Set the color for the numbers
    canvasContext1.fillText(num, x - 5, CELLS.y + 33); // Draw the number at the specified position
}

// Draw the game board cells
draw_cells();

// Call the Rules function to display the rules
Rules();
