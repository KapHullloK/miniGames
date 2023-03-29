var scam_M = document.createElement('audio');
var scam1_M = document.createElement('audio');
var scam2_M = document.createElement('audio');
var scam3_M = document.createElement('audio');

var stop = document.createElement("img");
stop.src = './imgs/stoP.png';

stop.style.position = "absolute"
stop.style.width = 70 + "px"
stop.style.height = 70 + "px"
stop.style.top = 50 + '%'
stop.style.left = '1.5%'
document.body.appendChild(stop)

stop.addEventListener('click', function () {
    document.body.removeChild(scam_M)
})

stop.addEventListener('click', function () {
    document.body.removeChild(scam1_M)
})

stop.addEventListener('click', function () {
    document.body.removeChild(scam2_M)
})

stop.addEventListener('click', function () {
    document.body.removeChild(scam3_M)
})

function Player(main, song, pic, y) {
    var img = document.createElement("img");
    img.src = pic;

    img.style.position = "absolute"
    img.style.width = 120 + "px"
    img.style.height = 70 + "px"
    img.style.top = y + '%'
    img.style.left = '0%'
    document.body.appendChild(img)

    img.addEventListener('click', function () {
        main.src = song
        main.play()
        main.loop = true;
        main.volume = 0.2
        document.body.appendChild(main)
    })
}


Player(scam_M, './music/scamS.mp3', './imgs/scamT.png', 5)
Player(scam1_M, './music/S3rlH.mp3', './imgs/s3H.png', 15)
Player(scam2_M, './music/stonik.mp3', './imgs/stoniK.png', 25)
Player(scam3_M, './music/fortuna.mp3', './imgs/fortunA.png', 35)
