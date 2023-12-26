const validPath = function (n, edges, source, destination){
    let graph = new Map();
    let visited = new Set();

    for(let [v,e] of edges){
        if(graph.has(v)){
            graph.get(v).push(e);
        }else {
            graph.set(v, [e]);
        }
        if(graph.has(e)){
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }

    function dfs(vertex){
        visited.add(vertex);
        let neighbours = graph.get(vertex);
        if(neighbours && neighbours.length > 0){
            for(let i = 0; i < neighbours.length; i++){
                if(!visited.has(neighbours[i])){
                    dfs(neighbours[i]);
                }
            }
        }
    }

    dfs(source);
    return visited.has(destination);
}

console.log(validPath(3,[[0,1],[1,2],[2,0]],0,2))
