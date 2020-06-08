function gameOflife(arr){
    console.log()
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            function neighbours(i,j){
                let counter = 0;
                if(i>0){
                    if(arr[i-1][j] !== 0){ counter++ }
                }
                if(i<9){
                    if(arr[i+1][j] !== 0){ counter++ } 
                }
                if(j>0){
                    if(arr[i][j-1] !== 0){ counter++ }
                }
                if(j<9){
                    if(arr[i][j+1] !== 0){ counter++ } 
                }
                return counter
            }
            if(neighbours(i,j) === 3) {
                arr[i][j] = 1
            }
            if(neighbours(i,j) === (0 || 4)){
                arr[i][j] = 0
            }
        }
    }
    return arr

}

console.log(gameOflife([
    [0,1,0,0,0,1,1,0,0,0],
    [1,0,0,0,0,1,1,0,0,0],
    [0,1,0,0,0,0,0,1,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
]))


