function check_cell(puz, chislo, zero) {

    var box_r = Math.floor(zero[0] / 3) * 3
    var box_r_3 = box_r + 3
    var box_l = Math.floor(zero[1] / 3) * 3
    var box_l_3 = box_l + 3

    if (puz[zero[0]][zero[1]] !== 0) {
        return false
    }

    if (puz[zero[0]].indexOf(chislo) > -1) {
        return false
    }

    for (let v of puz) {
        if (v[zero[1]] === chislo) {
            return false
        }
    }

    while (box_r < box_r_3) {
        while (box_l < box_l_3) {
            if (puz[box_r][box_l] === chislo) {
                return false
            }
            box_l++
        }
        box_l -= 3
        box_r++
    }
    return true
}

function isWin(puz) {
    for (let i of puz) {
        if (i.indexOf(0) !== -1) {
            return false
        }
    }
    return true
}

// This code can help you solve this problem
// https://www.codewars.com/kata/5296bc77afba8baa690002d7
// My profile: https://www.codewars.com/users/KapHullloK