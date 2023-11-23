const combine = function(n, k){
    let result = [];

    function dfs(index, current){
        // base case
        if(current.length === k){
            result.push([...current]);
        }

        for(let i = index; i <= n; i++ ){
            current.push(i);
            // recurse
            dfs(i+1, current);
            // backtrack
            current.pop();
        }
    }
    dfs(1, []);

    return result;
}

console.log(combine(4,2))
