var rule = document.createElement("img");

function Rules() {
    rule.src = './imgs/picRul.png';

    rule.style.position = "absolute"
    rule.style.width = 70 + "px"
    rule.style.height = 70 + "px"
    rule.style.top = '55%'
    rule.style.left = '90%'
    rule.style.transform = 'translate(-50%, -50%)'
    document.body.appendChild(rule)

    rule.addEventListener('mouseover', function () {
        drawRules()
    })

    rule.addEventListener('mouseleave', function () {
        canvasContext1.clearRect(850, 0, 600, 300)
    })
}

function drawRules() {
    canvasContext1.font = '28px Courier New'
    canvasContext1.fillStyle = 'rgb(243,237,15)';
    canvasContext1.fillText('Для того что бы начать играть', CELLS.ruleX, 100)
    canvasContext1.fillText('вам нужно вводить в окно ввода', CELLS.ruleX, 100 + CELLS.ruleY)
    canvasContext1.fillText('СТРОЧКУ СТОЛБЕЦ и само ЧИСЛО', CELLS.ruleX, 100 + CELLS.ruleY * 2)
    canvasContext1.fillText('регистр столбца не важен', CELLS.ruleX, 100 + CELLS.ruleY * 3)
    canvasContext1.fillText('Пример: 1f2', CELLS.ruleX, 100 + CELLS.ruleY * 4 + 15)
}

function EndMessage(pic, size, position) {
    canvasContext1.clearRect(0, 0, window.innerWidth, window.innerHeight)

    let gameVic = document.createElement("img");
    gameVic.src = pic;

    gameVic.style.position = "absolute"
    gameVic.style.width = window.innerWidth / size + "px"
    gameVic.style.height = window.innerHeight / size + "px"
    gameVic.style.top = position
    gameVic.style.left = '50%'
    gameVic.style.transform = 'translate(-50%, -50%)'
    document.body.appendChild(gameVic)
}

function Restart() {
    canvasContext1.clearRect(0, 0, window.innerWidth, window.innerHeight)
    document.body.removeChild(rule)

    let gameVic = document.createElement("img");
    gameVic.src = './imgs/rel.png';

    gameVic.style.position = "absolute"
    gameVic.style.width = window.innerWidth / 6 + "px"
    gameVic.style.height = window.innerHeight / 7 + "px"
    gameVic.style.top = '85%'
    gameVic.style.left = '50%'
    gameVic.style.transform = 'translate(-50%, -50%)'
    document.body.appendChild(gameVic)

    gameVic.addEventListener('click', function () {
        location.reload()
    })
}