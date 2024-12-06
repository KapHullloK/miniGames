function drawFrame() {
    // Draw the left grass area
    canvasContext.fillStyle = SCREEN.grass_color;
    canvasContext.fillRect(0, 0, SCREEN.widthGrass, SCREEN.height);

    // Draw the left road border
    canvasContext.fillStyle = SCREEN.border;
    canvasContext.fillRect(474, 0, SCREEN.widthBorder, SCREEN.height);

    // Draw the main road
    canvasContext.fillStyle = SCREEN.way_color;
    canvasContext.fillRect(489, 0, 459, SCREEN.height);

    // Draw the right road border
    canvasContext.fillStyle = SCREEN.border;
    canvasContext.fillRect(933, 0, SCREEN.widthBorder, SCREEN.height);

    // Draw the right grass area
    canvasContext.fillStyle = SCREEN.grass_color;
    canvasContext.fillRect(948, 0, SCREEN.widthGrass, SCREEN.height);

    // Draw the white dividing line in the middle of the road
    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(700, 0, 10, SCREEN.height);
}

function drawMarkup() {
    // Draw road markings (repeated for different positions)
    canvasContext.fillRect(585, MARKUP1.y, MARKUP1.width, MARKUP1.height);
    canvasContext.fillRect(815, MARKUP1.y, MARKUP1.width, MARKUP1.height);
    canvasContext.fillRect(585, MARKUP2.y, MARKUP2.width, MARKUP2.height);
    canvasContext.fillRect(815, MARKUP2.y, MARKUP2.width, MARKUP2.height);
    canvasContext.fillRect(585, MARKUP3.y, MARKUP3.width, MARKUP3.height);
    canvasContext.fillRect(815, MARKUP3.y, MARKUP3.width, MARKUP3.height);
    canvasContext.fillRect(585, MARKUP4.y, MARKUP4.width, MARKUP4.height);
    canvasContext.fillRect(815, MARKUP4.y, MARKUP4.width, MARKUP4.height);
    canvasContext.fillRect(585, MARKUP5.y, MARKUP5.width, MARKUP5.height);
    canvasContext.fillRect(815, MARKUP5.y, MARKUP5.width, MARKUP5.height);
}

function updateScreen() {
    // Reset the road marking positions when they go off-screen
    if (MARKUP1.y > 804) MARKUP1.y = -60;
    if (MARKUP2.y > 804) MARKUP2.y = -60;
    if (MARKUP3.y > 804) MARKUP3.y = -60;
    if (MARKUP4.y > 804) MARKUP4.y = -60;
    if (MARKUP5.y > 804) MARKUP5.y = -60;

    // Move the road markings downward
    MARKUP1.y += MARKUP1.yDirection;
    MARKUP2.y += MARKUP2.yDirection;
    MARKUP3.y += MARKUP3.yDirection;
    MARKUP4.y += MARKUP4.yDirection;
    MARKUP5.y += MARKUP5.yDirection;
}

function updateLeftCars() {
    // Move the left cars downward
    LEFTCARS.y_1 += LEFTCARS.speed;
    LEFTCARS.y_2 += LEFTCARS.speed;
    blue_car.style.top = LEFTCARS.y_1 + 'px';
    yellow_lam.style.top = LEFTCARS.y_2 + 'px';

    // Move the right cars downward
    RIGHTCARS.y_1 += RIGHTCARS.speed;
    RIGHTCARS.y_2 += RIGHTCARS.speed;
    blue_cabriolet.style.top = RIGHTCARS.y_1 + 'px';
    lam.style.top = RIGHTCARS.y_2 + 'px';

    // Reset positions of cars when they move off-screen
    if (blue_car.y > 1500) {
        LEFTCARS.y_1 = -150;
        blue_car.style.top = LEFTCARS.y_1 + 'px';
    }
    if (yellow_lam.y > 1500) {
        LEFTCARS.y_2 = -700;
        yellow_lam.style.top = LEFTCARS.y_2 + 'px';
    }
    if (blue_cabriolet.y > 1600) {
        RIGHTCARS.y_1 = -500;
        blue_cabriolet.style.top = RIGHTCARS.y_1 + 'px';
    }
    if (lam.y > 1600) {
        RIGHTCARS.y_2 = -250;
        lam.style.top = RIGHTCARS.y_2 + 'px';
    }
}

function crashing() {
    // Check if the player's car crashes with any other car
    return (
        car.x + car.width - 5 >= lam.x &&
        car.x <= lam.x + lam.width - 5 &&
        car.y >= lam.y - lam.height + 10 &&
        car.y <= lam.y + lam.height ||
        car.x + car.width - 5 >= blue_car.x &&
        car.x <= blue_car.x + blue_car.width - 5 &&
        car.y >= blue_car.y - blue_car.height + 10 &&
        car.y <= blue_car.y + blue_car.height ||
        car.x + car.width - 5 >= blue_cabriolet.x &&
        car.x <= blue_cabriolet.x + blue_cabriolet.width - 5 &&
        car.y >= blue_cabriolet.y - blue_cabriolet.height + 10 &&
        car.y <= blue_cabriolet.y + blue_cabriolet.height ||
        car.x + car.width - 5 >= yellow_lam.x &&
        car.x <= yellow_lam.x + yellow_lam.width - 5 &&
        car.y >= yellow_lam.y - yellow_lam.height + 10 &&
        car.y <= yellow_lam.y + yellow_lam.height
    );
}

function InitEventsListeners() {
    // Add a listener for keyboard events
    window.addEventListener("keydown", keyAt);
}

function keyAt(event) {
    // Move the player's car left or right based on the arrow key pressed
    if (event.key === "ArrowLeft") {
        if (CAR.left - 112 < 450) {
            // Prevent moving out of bounds on the left
        } else {
            CAR.left -= 112; // Move left
        }
    }
    if (event.key === "ArrowRight") {
        if (CAR.left + 112 > 900) {
            // Prevent moving out of bounds on the right
        } else {
            CAR.left += 112; // Move right
        }
    }
    car.style.left = CAR.left + 'px'; // Update car position
    car.style.transition = 'all 0.15s ease-in-out'; // Add smooth transition
}

let startTime;
let timeLeft = 20000;

function play() {
    if (!startTime) {
        startTime = Date.now(); // Set the start time
    }

    if (!crashing()) {
        // If no crash, continue the game
        drawFrame();
        drawMarkup();
        updateScreen();
        updateLeftCars();
        requestAnimationFrame(play); // Call the next frame

        // Update the timer
        let elapsedTime = Date.now() - startTime;
        timeLeft = 20000 - elapsedTime;
        if (timeLeft < 0) {
            timeLeft = 0; // Ensure timer does not go below 0
        }

        let timerElement = document.querySelector('#timer');
        timerElement.textContent = `Time left: ${Math.ceil(timeLeft / 1000)} seconds`;
    } else {
        // Handle losing case
        audio.pause();
        losing_audio.play();
        document.querySelector('#lose-modal').style.display = 'flex';
        document.getElementById('restart-btn').addEventListener('click', function () {
            location.reload(); // Restart the game
        });
    }

    if (timeLeft <= 0) {
        // Handle winning case
        audio.pause();
        document.querySelector('#win-modal').style.display = 'flex';
        document.getElementById('restart-btn-win').addEventListener('click', function () {
            location.reload(); // Restart the game
        });
    }
}
