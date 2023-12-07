const rotateImage = function(matrix){
    // transpose the matrix
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j =0; j< matrix.length/2; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - 1 - j]
            matrix[i][matrix.length - 1 - j] = temp;
        }
    }
    return matrix;
}


console.log(rotateImage([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))
