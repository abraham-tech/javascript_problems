const uniquePathsWithObstacle = function(obstacleGrid){
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;

    let dp = Array.from(Array(row), () => new Array(col).fill(0));

    for(let i = 0; i < row; i++){
        if(obstacleGrid[0][i] === 1){
            dp[i][0] = 0;
            break;
        }else {
            dp[i][0] = 1;
        }
    }

    for(let i = 0; i < col; i++){
        if(obstacleGrid[0][i] === 1){
            dp[0][i] = 0;
            break;
        }else {
            dp[0][i] = 1;
        }
    }

    for(let i = 1; i < row; i++){
        for(let j = 1; j < col; j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0;
            }else{
                dp[i][j] = dp[i -1][j] +dp[i][j - 1];
            }
        }
    }

    return dp[row -1][col - 1];
}

const grid = [[0,0,0],[0,1,0],[0,0,0]];
console.log(uniquePathsWithObstacle(grid))
