var canvas = document.querySelector('canvas')

var GAME = {
    width: 1400, height: 840
}

var BOARD_9 = all9[Math.floor(Math.random() * all9.length)];

var CELLS = {
    x: 250, y: 130, width: 40, height: 40, color: 'rgba(255,255,255,0.76)',
    size_b: BOARD_9.length, hole: 50, gap: 0, raiseGap: 10, control: 1,
    ruleX: 870, ruleY: 36
}

canvas.width = GAME.width;
canvas.height = GAME.height;

let canvasContext1 = canvas.getContext('2d')

function draw_cells() {
    for (let i = 0; i < CELLS.size_b; i++) {

        for (let j = 0; j < CELLS.size_b; j++) {

            CELLS.x += CELLS.hole

            if (CELLS.gap % 3 === 0) {
                CELLS.x += CELLS.raiseGap
            }

            if (CELLS.control === 1) {
                fieldsLet(LETTER[j], CELLS.y)
            }

            CELLS.gap++

            drawB1(BOARD_9[i][j])

        }

        fieldsNum(NUMS[i], 282)

        if (CELLS.gap % 27 === 0) {
            CELLS.y += CELLS.raiseGap
        }

        CELLS.x = 250
        CELLS.y += CELLS.hole
        CELLS.control++

    }
    //depend on CELLS
    CELLS.x = 250
    CELLS.y = 130
}


function drawB1(numb) {
    canvasContext1.fillStyle = 'rgb(252,251,251)';
    canvasContext1.fillRect(CELLS.x, CELLS.y, CELLS.width, CELLS.height);

    canvasContext1.font = '37px Arial'
    canvasContext1.fillStyle = 'rgb(0,0,0)';
    canvasContext1.fillText(numb, CELLS.x + 10, CELLS.y + 34)
}

function fieldsLet(letter, y) {
    canvasContext1.font = '37px Copperplate'
    canvasContext1.fillStyle = 'rgb(183,1,255)';
    canvasContext1.fillText(letter, CELLS.x + 7, y - 8)
}

function fieldsNum(num, x) {
    canvasContext1.font = '37px Copperplate'
    canvasContext1.fillStyle = 'rgb(183,1,255)';
    canvasContext1.fillText(num, x - 5, CELLS.y + 33)
}

draw_cells()
Rules()
