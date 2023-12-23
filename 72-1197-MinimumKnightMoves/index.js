
const minKnightMoves = function(x,y){
    let dir = [
        [-2,-1], [-1, -2], [1,-2], [2, -1], [2,1], [1,2], [-1,2], [-2,1]
    ]
    let queue = [[0,0]];
    let steps = 0;
    let seen = new Set();

    while(queue.length) {
        let next = [];
        while(queue.length){
            let current = queue.shift();
            let currentX = current[0];
            let currentY = current[1];
            console.log(currentX , currentY);
            if(currentX === x && currentY === y) return steps;

            for(let d of dir){
                let nextX = currentX + d[0];
                let nextY = currentX + d[1];
                if(!seen.has(nextX +","+ nextY)){
                    seen.add(nextX +","+ nextY);
                    next.push([nextX,nextY]);
                }
            }
        }
        queue = next;
        steps++;
    }
}

console.log(minKnightMoves(5,5))
