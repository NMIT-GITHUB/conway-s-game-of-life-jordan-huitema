function gameOflife(arr){
    console.log()
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            function neighbours(i,j){
                let counter = 0;
                if(i>0){
                    if(arr[i-1][j] !== "."){ counter++ }
                }
                if(i<9){
                    if(arr[i+1][j] !== "."){ counter++ } 
                }
                if(j>0){
                    if(arr[i][j-1] !== "."){ counter++ }
                }
                if(j<9){
                    if(arr[i][j+1] !== "."){ counter++ } 
                }
                return counter
            }
            if(neighbours(i,j) === 3) {
                arr[i][j] = "O"
            }
            if(neighbours(i,j) === (0 || 4)){
                arr[i][j] = "."
            }
        }
    }
    return arr

}

console.log(gameOflife([
    [".","O",".",".",".","O","O",".",".","."],
    ["O",".",".",".",".","O","O",".",".","."],
    [".","O",".",".",".",".",".","O",".","."],
    [".",".",".","O","O","O","O",".",".","."],
    [".",".",".","O","O","O","O",".",".","."],
    [".",".",".","O","O","O","O",".",".","."],
    [".",".",".","O","O","O","O",".",".","."],
    [".",".","O","O",".",".","O","O",".","."],
    [".","O","O",".",".",".",".","O","O","."],
    [".",".",".",".",".",".",".",".",".","."],
]))


