// Create an image element for the "Rules" button
var rule = document.createElement("img");

// Function to display the "Rules" button and handle its interactions
function Rules() {
    rule.src = './imgs/picRul.png'; // Set the image source for the "Rules" button

    // Style the "Rules" button
    rule.style.position = "absolute";
    rule.style.width = 70 + "px";
    rule.style.height = 70 + "px";
    rule.style.top = '55%'; // Position vertically near the center
    rule.style.left = '90%'; // Align to the far right
    rule.style.transform = 'translate(-50%, -50%)'; // Center the button relative to its position
    document.body.appendChild(rule); // Add the button to the document

    // Show the game rules when hovering over the button
    rule.addEventListener('mouseover', function () {
        drawRules();
    });

    // Clear the displayed rules when the mouse leaves the button
    rule.addEventListener('mouseleave', function () {
        canvasContext1.clearRect(850, 0, 600, 300); // Clear a specific area of the canvas
    });
}

// Function to display game rules on the canvas
function drawRules() {
    canvasContext1.font = '28px Courier New'; // Set the font style and size
    canvasContext1.fillStyle = 'rgb(243,237,15)'; // Set the text color

    // Display each line of the game rules at a specific position
    canvasContext1.fillText('Для того что бы начать играть', CELLS.ruleX, 100);
    canvasContext1.fillText('вам нужно вводить в окно ввода', CELLS.ruleX, 100 + CELLS.ruleY);
    canvasContext1.fillText('СТРОЧКУ СТОЛБЕЦ и само ЧИСЛО', CELLS.ruleX, 100 + CELLS.ruleY * 2);
    canvasContext1.fillText('регистр столбца не важен', CELLS.ruleX, 100 + CELLS.ruleY * 3);
    canvasContext1.fillText('Пример: 1f2', CELLS.ruleX, 100 + CELLS.ruleY * 4 + 15);
}

// Function to display an end message (e.g., victory or defeat)
function EndMessage(pic, size, position) {
    canvasContext1.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clear the entire canvas

    let gameVic = document.createElement("img"); // Create an image element for the message
    gameVic.src = pic; // Set the image source

    // Style the image
    gameVic.style.position = "absolute";
    gameVic.style.width = window.innerWidth / size + "px"; // Scale the width based on screen size
    gameVic.style.height = window.innerHeight / size + "px"; // Scale the height based on screen size
    gameVic.style.top = position; // Position the image vertically
    gameVic.style.left = '50%'; // Center horizontally
    gameVic.style.transform = 'translate(-50%, -50%)'; // Center the image relative to its position
    document.body.appendChild(gameVic); // Add the image to the document
}

// Function to restart the game
function Restart() {
    canvasContext1.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clear the entire canvas
    document.body.removeChild(rule); // Remove the "Rules" button

    let gameVic = document.createElement("img"); // Create an image for the restart button
    gameVic.src = './imgs/rel.png'; // Set the image source

    // Style the restart button
    gameVic.style.position = "absolute";
    gameVic.style.width = window.innerWidth / 6 + "px"; // Scale the width
    gameVic.style.height = window.innerHeight / 7 + "px"; // Scale the height
    gameVic.style.top = '85%'; // Position near the bottom
    gameVic.style.left = '50%'; // Center horizontally
    gameVic.style.transform = 'translate(-50%, -50%)'; // Center the button relative to its position
    document.body.appendChild(gameVic); // Add the restart button to the document

    // Reload the page when the restart button is clicked
    gameVic.addEventListener('click', function () {
        location.reload();
    });
}
