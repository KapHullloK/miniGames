// Create audio elements for different songs
var scam_M = document.createElement('audio');
var scam1_M = document.createElement('audio');
var scam2_M = document.createElement('audio');
var scam3_M = document.createElement('audio');

// Create an image element for the stop button
var stop = document.createElement("img");
stop.src = './imgs/stoP.png'; // Set the stop button image source

// Style the stop button (size and position)
stop.style.position = "absolute";
stop.style.width = 75 + "px";
stop.style.height = 75 + "px";
stop.style.top = 50 + '%'; // Center vertically
stop.style.left = '1.5%'; // Align to the left

// Add the stop button to the document
document.body.appendChild(stop);

// Function to remove an audio element when the stop button is clicked
function removeM(name) {
    stop.addEventListener('click', function () {
        document.body.removeChild(name); // Remove the audio element from the document
    });
}

// Function to create a clickable player button for a song
function Player(main, song, pic, y) {
    var img = document.createElement("img"); // Create an image for the player button
    img.src = pic; // Set the image source

    // Style the player button
    img.style.position = "absolute";
    img.style.width = 120 + "px";
    img.style.height = 70 + "px";
    img.style.top = y + '%'; // Position the button vertically
    img.style.left = '0%'; // Align to the left
    document.body.appendChild(img); // Add the button to the document

    // Add an event listener to play the song when the button is clicked
    img.addEventListener('click', function () {
        main.src = song; // Set the song source
        main.play(); // Start playing the song
        main.loop = true; // Loop the song
        main.volume = 0.2; // Set the volume level
        document.body.appendChild(main); // Add the audio element to the document
    });
}

// Call the removeM function for each audio element to allow stopping
removeM(scam_M);
removeM(scam1_M);
removeM(scam2_M);
removeM(scam3_M);

// Create player buttons for different songs
Player(scam_M, './music/Komar.mp3', './imgs/scamT.png', 5); // Player 1 at 5% from the top
Player(scam1_M, './music/S3rlH.mp3', './imgs/s3H.png', 15); // Player 2 at 15% from the top
Player(scam2_M, './music/stonik.mp3', './imgs/stoniK.png', 25); // Player 3 at 25% from the top
Player(scam3_M, './music/fortuna.mp3', './imgs/fortunA.png', 35); // Player 4 at 35% from the top
