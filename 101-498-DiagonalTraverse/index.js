const findDiagonalOrder = function(matrix){
    if(matrix.length === 1) return matrix.flat();

    let row = matrix.length;
    let col = matrix[0].length;

    let res = Array.from(Array(row + col - 1), () => new Array().fill([]));

    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if ((i + j) % 2 === 0) {
                res[i + j].unshift(matrix[i][j]);
            } else {
                res[i + j].push(matrix[i][j]);
            }
        }
    }
    return res.flat();
}


const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(findDiagonalOrder(matrix));