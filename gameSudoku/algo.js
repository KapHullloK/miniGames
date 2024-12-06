function check_cell(puz, chislo, zero) {
    // Get the starting row of the 3x3 box where the cell is located
    var box_r = Math.floor(zero[0] / 3) * 3;
    // Get the ending row of the 3x3 box
    var box_r_3 = box_r + 3;
    // Get the starting column of the 3x3 box
    var box_l = Math.floor(zero[1] / 3) * 3;
    // Get the ending column of the 3x3 box
    var box_l_3 = box_l + 3;

    // Check if the cell is already filled
    if (puz[zero[0]][zero[1]] !== 0) {
        return false; // The cell is not empty
    }

    // Check if the number is already in the same row
    if (puz[zero[0]].indexOf(chislo) > -1) {
        return false; // The number exists in the row
    }

    // Check if the number is already in the same column
    for (let v of puz) {
        if (v[zero[1]] === chislo) {
            return false; // The number exists in the column
        }
    }

    // Check if the number is already in the 3x3 box
    while (box_r < box_r_3) {
        while (box_l < box_l_3) {
            if (puz[box_r][box_l] === chislo) {
                return false; // The number exists in the box
            }
            box_l++; // Move to the next column in the box
        }
        box_l -= 3; // Reset column to the start of the box
        box_r++; // Move to the next row in the box
    }

    return true; // The number can be placed in the cell
}

function isWin(puz) {
    // Check if there are any empty cells (value 0) in the puzzle
    for (let i of puz) {
        if (i.indexOf(0) !== -1) {
            return false; // The puzzle is not yet completed
        }
    }
    return true; // No empty cells, the puzzle is solved
}

// This code can help you solve this problem
// https://www.codewars.com/kata/5296bc77afba8baa690002d7