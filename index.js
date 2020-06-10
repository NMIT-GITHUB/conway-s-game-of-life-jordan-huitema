function gameOflife (arr) {
    let output = [];
    //change -'s to .'s
    arr.forEach((itm, idx) => {
        itm.forEach((subItm, subIdx) => {
            subItm === "-" ? arr[idx][subIdx] = "." : null;
        });
    });
    arr.forEach((itm, idx) => {
        output.push([]);        //add empty index to output arr
        itm.forEach((subItm, subIdx) => {
            let counter = 0;
            //count UP (if you can)
            if (idx > 0) {
                arr[idx - 1][subIdx] !== "." ? counter++ : null;
                //diagonal
                subIdx > 0 && arr[idx - 1][subIdx - 1] !== "." ? counter++ : null;
                subIdx < (arr[idx].length - 1) && (arr[idx - 1][subIdx + 1] !== ".") ? counter++ : null;
            }
            //count DOWN (if you can)
            if (idx < arr.length - 1) {
                arr[idx + 1][subIdx] !== "." ? counter++ : null;
                //diagonal
                subIdx > 0 && arr[idx + 1][subIdx - 1] !== "." ? counter++ : null;
                subIdx < (arr[idx].length - 1) && arr[idx + 1][subIdx + 1] !== "." ? counter++ : null;
            } 
            //count LEFT and RIGHT (if you can)
            subIdx > 0 && arr[idx][subIdx - 1] !== "." ? counter++ : null;
            subIdx < (arr[idx].length - 1) && arr[idx][subIdx + 1] !== "." ? counter++ : null;

            counter === 3 ? output[idx].push("O") :                     //give life
                counter < 2 || counter > 3 ? output[idx].push("-") :    //kill
                    output[idx].push(subItm);                           //do nothing
        });
    });
    return output;
}
//input 1
console.table(gameOflife([
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["O", "O", "O", ".", ".", ".", ".", "O", "O", "."],
    [".", ".", ".", ".", ".", ".", ".", "O", "O", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "O", "O", ".", "."],
    [".", "O", "O", "O", ".", ".", "O", ".", ".", "."],
    ["O", "O", "O", ".", ".", ".", ".", ".", ".", "O"],
    [".", ".", ".", ".", ".", ".", ".", ".", "O", "O"]
]));
//input 2 = output 1
console.table(gameOflife([
    ['.', 'O', '.', '-', '-', '-', '-', '.', '.', '-'],
    ['-', 'O', '-', '-', '-', '-', '.', 'O', 'O', '.'],
    ['.', 'O', '.', '-', '-', '-', '.', 'O', 'O', '.'],
    ['-', '-', '-', '-', '-', '-', '-', '.', '.', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '.', '.', '-', '-'],
    ['-', '.', 'O', '.', '-', '.', 'O', 'O', '-', '-'],
    ['O', '-', '-', 'O', '-', '.', 'O', 'O', '.', '-'],
    ['O', '-', '-', 'O', '-', '-', '-', '.', 'O', 'O'],
    ['.', 'O', '.', '-', '-', '-', '-', '-', 'O', 'O']
]));
//input 3 = output 2
//this shows the game is working corrently beause 3 patterns should loop and 1 sould remain static
console.table(gameOflife([
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["O", "O", "O", ".", ".", ".", ".", "O", "O", "."],
    [".", ".", ".", ".", ".", ".", ".", "O", "O", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "O", "O", ".", "."],
    [".", "O", "O", "O", ".", ".", "O", ".", ".", "."],
    ["O", "O", "O", ".", ".", ".", ".", ".", ".", "O"],
    [".", ".", ".", ".", ".", ".", ".", ".", "O", "O"]
]));
