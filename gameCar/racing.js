// Select the canvas element and set up the 2D context
let canvas = document.getElementById("field");
let canvasContext = canvas.getContext("2d");

// Set the canvas size according to the screen dimensions
canvas.width = SCREEN.width;
canvas.height = SCREEN.height;

// Load and configure the game music
const audio = new Audio('music_game.m4a');
audio.loop = true; // Enable looping for background music

// Start playing the game music when any key is pressed
document.addEventListener('keydown', function () {
    audio.play();
});

// Load the sound to play when the player loses
const losing_audio = new Audio('losing_sound.m4a');

// Create the player's car and set its properties
let car = document.createElement("img");
car.src = "images/white_car.png";
car.style.position = "absolute";
car.style.width = "60px";
car.style.height = "120px";
car.style.top = 580 + 'px'; // Initial vertical position
car.style.left = 740 + 'px'; // Initial horizontal position
document.body.appendChild(car); // Add the car to the page

// Create and configure the yellow Lamborghini enemy car
let yellow_lam = document.createElement("img");
yellow_lam.src = "images/yellow_lam.png";
yellow_lam.style.position = "absolute";
yellow_lam.style.width = "50px";
yellow_lam.style.height = "100px";
yellow_lam.style.top = 320 + 'px';
yellow_lam.style.left = 630 + 'px';
document.body.appendChild(yellow_lam); // Add to the page

// Create and configure the blue enemy car
let blue_car = document.createElement("img");
blue_car.src = "images/blue_car.png";
blue_car.style.position = "absolute";
blue_car.style.width = "55px";
blue_car.style.height = "110px";
blue_car.style.top = 600 + 'px';
blue_car.style.left = 520 + 'px';
document.body.appendChild(blue_car); // Add to the page

// Create and configure another enemy car, the red Lamborghini
let lam = document.createElement("img");
lam.src = "images/lambo.png";
lam.style.position = "absolute";
lam.style.width = "70px";
lam.style.height = "150px";
lam.style.top = 450 + 'px';
lam.style.left = 850 + 'px';
document.body.appendChild(lam); // Add to the page

// Create and configure a blue cabriolet enemy car
let blue_cabriolet = document.createElement("img");
blue_cabriolet.src = "images/blue_cabriolet.png";
blue_cabriolet.style.position = "absolute";
blue_cabriolet.style.width = "65px";
blue_cabriolet.style.height = "150px";
blue_cabriolet.style.top = 120 + 'px';
blue_cabriolet.style.left = 740 + 'px';
document.body.appendChild(blue_cabriolet); // Add to the page

// Initialize event listeners for key presses
InitEventsListeners();

// Start the game loop
play();
