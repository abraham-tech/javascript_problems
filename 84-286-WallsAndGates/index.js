const wallsAndGates = function(rooms){
    const WALL = -1;
    const GATE = 1;
    const EMPTY = 0;

    let queue = [];
    let dir = [[0,1],[1,0],[0,-1],[-1,0]];

    for(let i = 0; i < rooms.length; i++){
        for(let j = 0; j < rooms[0].length; j++){
            if(room[i][j] === GATE){
                queue.push([i, j]);
            }
        }
    }

    while(queue.length){
        let current = queue.shift();
        let currentX = current[0];
        let currentY = current[1];

        for(let d of dir){
            let newX = currentX + d[0];
            let newY = currentY + d[1];
            if(newX >= 0 && newX < rooms.length && newY >= 0 && newY < rooms[0].length && rooms[newX][newY] === EMPTY){
                rooms[newX][newY] = rooms[currentX][currentY] + 1;
                queue.push([newX, newY]);
            }
        }
    }
}
