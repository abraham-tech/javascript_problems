const setZeros = function( matrix ){
    let zeroPositions = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                zeroPositions.push([i,j]);
            }
        }
    };

    for(let i = 0; i < zeroPositions.length; i++){
        const [row, col] = zeroPositions[i];
        for(let i = 0; i < matrix.length; i++){
            matrix[i][col] = 0;
        }
        for(let i = 0; i < matrix[0].length; i++){
            matrix[row][i] = 0;
        }
    }


    return matrix;
}

const matrix = [[1,1,1],[1,0,1],[1,1,1]];
const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZeros(matrix2))
