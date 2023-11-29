const combinationSumThree = function(k, n){
    let result = [];

    function dfs(index, current, total){
        if(total < 0 || current.length > k ) return;
        if(total === 0 && current.length === k){
            result.push([...current]);
        }

        for(let i = index; i <= 9; i++){
            current.push(i);
            dfs(i+1, current, total - i);
            current.pop();
        }
    }

    dfs(1, [], n);
    return result;
}




console.log(combinationSumThree(3,9))
