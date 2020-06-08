function gameOflife(arr) {
    //change X's to .'s
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "X") arr[i][j] = ".";
        }
    }
    let output = []
    //up and down loop (y)
    for (i = 0; i < arr.length; i++) {
        //copy current row to output array
        output.push(arr[i])
        //side to side loop (x)
        for (j = 0; j < arr[i].length; j++) {
            //count neighbours
            function neighbours(i, j) {
                let counter = 0;
                //look up (if you can)
                if (i > 0) {
                    if (arr[i - 1][j] !== ".") { counter++ }
                }
                //look Down (if you can)
                if (i < (arr[i].length - 1)) {
                    if (arr[i + 1][j] !== ".") { counter++ }
                }
                //look left (if you can)
                if (j > 0) {
                    if (arr[i][j - 1] !== ".") { counter++ }
                }
                //look right (if you can)
                if (j < (arr[j].length - 1)) {
                    if (arr[i][j + 1] !== ".") { counter++ }
                }
                //return number of neighbours
                return counter
            }
            //Give Life
            if (neighbours(i, j) > 1) {
                output[i][j] = "O"
            }
            //Kill
            if (neighbours(i, j) === (0 || 4)) {
                output[i][j] = "X"
            }
        }
    }
    return output
}

console.log(gameOflife([
    [".", "O", ".", ".", ".", "O", "O", ".", ".", "."],
    ["O", ".", ".", ".", ".", "O", "O", ".", ".", "."],
    [".", "O", ".", ".", ".", ".", ".", "O", ".", "."],
    [".", ".", ".", "O", "O", "O", "O", ".", ".", "."],
    [".", ".", ".", "O", "O", "O", "O", ".", ".", "."],
    [".", ".", ".", "O", "O", "O", "O", ".", ".", "."],
    [".", ".", ".", "O", "O", "O", "O", ".", ".", "."],
    [".", ".", "O", "O", ".", ".", "O", "O", ".", "."],
    [".", "O", "O", ".", ".", ".", ".", "O", "O", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
]))
console.log(gameOflife([
    ['O', 'O', '.', '.', '.', 'O', 'O', 'O', '.', '.'],
    ['O', 'O', '.', '.', '.', 'O', 'O', 'O', '.', '.'],
    ['O', 'O', '.', '.', 'O', 'O', 'X', 'O', '.', '.'],
    ['.', '.', '.', 'O', 'O', 'O', 'X', 'O', '.', '.'],
    ['.', '.', '.', 'O', 'O', 'O', 'X', 'O', '.', '.'],
    ['.', '.', 'O', 'O', 'O', 'X', 'X', 'O', '.', '.'],
    ['.', 'O', 'O', 'X', 'X', 'X', 'X', 'O', 'O', '.'],
    ['.', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'O', '.'],
    ['.', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]))
console.log(gameOflife([
    ['O', 'O', '.', '.', '.', 'O', 'O', 'O', '.', '.'],
    ['O', 'O', '.', '.', 'O', 'X', 'O', 'O', '.', '.'],
    ['O', 'O', '.', 'O', 'X', 'O', 'O', 'O', '.', '.'],
    ['.', '.', '.', 'O', 'X', 'O', 'O', 'O', '.', '.'],
    ['.', '.', 'O', 'X', 'X', 'O', 'O', 'O', '.', '.'],
    ['.', 'O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', '.'],
    ['.', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', '.'],
    ['.', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', '.'],
    ['.', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]))
console.log(gameOflife([
    ['O', 'O', '.', '.', 'O', 'O', 'O', 'O', '.', '.'],
    ['O', 'O', '.', 'O', 'O', 'X', 'X', 'O', '.', '.'],
    ['O', 'O', 'O', 'O', 'O', 'X', 'X', 'O', '.', '.'],
    ['.', '.', 'O', 'O', 'O', 'X', 'X', 'O', '.', '.'],
    ['.', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O', '.'],
    ['.', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'O', '.'],
    ['.', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'O', '.'],
    ['.', 'O', 'X', 'X', 'X', 'X', 'O', 'X', 'O', '.'],
    ['.', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]))


