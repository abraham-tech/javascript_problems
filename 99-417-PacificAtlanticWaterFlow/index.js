const pacificAtlantic = function(heights) {
    let m = heights.length;
    let n = heights[0].length;

    let pacificQueue = [];
    let atlanticQueue = [];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i === 0 || j === 0){
                pacificQueue.push([i, j]);
            }
            if(i === m -1 || j === n-1){
                atlanticQueue.push([i, j]);
            }
        }
    }

    function bfs(queue){
        const isValid = (x,y) => x >= 0 && y >= 0 && x < m && y < n;
        const directions = [[0,1],[0,-1], [1,0],[-1,0]];
        const visited = Array.from(Array(m), () => new Array(n).fill(false));

        while(queue.lenght){
            const [x,y] = queue.shift();
            visited[x][y] = true;

            for(let dir of directions){
                let nextX = x + dir[0];
                let nextY = y + dir[1];
                if(!isValid(nextX, nextY) || visited[nextX][nextY]) continue;
                if(heights[nextX][nextY] >= heights[x][y]){
                    queue.push([nextX, nextY]);
                }
            }
        }
        return visited;
    }
    const pacificVisited = bfs(pacificQueue);
    const atlanticVisited = bfs(atlanticQueue);

    const result = [];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(pacificVisited[i][j] && atlanticVisited[i][j]){
                result.push([i, j]);
            }
        }
    }

    return result;
}

let arr = [
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
];

console.log(pacificAtlantic(arr));
