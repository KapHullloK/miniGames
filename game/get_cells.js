function addInput() {

    var input = document.createElement('input');

    input.type = 'text';
    input.style.position = 'fixed';
    input.style.left = 508 + 'px';
    input.style.top = 640 + 'px';
    input.style.background = 'linear-gradient(50deg, #00008B, #9400D3)';
    input.style.width = 66 + 'px'
    input.style.height = 50 + 'px'
    input.style.border = 'groove'
    input.style.borderRadius = 7 + 'px'
    input.style.font = '30px Verdana'

    input.onkeydown = handleEnter;

    document.body.appendChild(input);

    input.focus();

}

function handleEnter() {
    if (this.value.length === 3) {
        document.body.removeChild(this);
        var n = this.value[1].toUpperCase()
        const pos0 = Number(this.value[0]) - 1;
        const num = Number(this.value[2]);

        if (isNaN(pos0) || isNaN(num) || !(n in InputKeys)) {
            play()
            return
        }

        const pos1 = InputKeys[n];
        const res = check_cell(BOARD_9, num, [pos0, pos1]);


        if (res) {
            BOARD_9[pos0][pos1] = num

            if (isWin(BOARD_9)) {
                EndMessage('./imgs/endVictor.png', 1.5, '40%')
                Restart()

            } else {
                draw_cells()
                play()

            }

        } else {
            EndMessage('./imgs/endGover.png', 1.5, '40%')
            Restart()
        }
    }
}

play()

function play() {
    addInput()
}
