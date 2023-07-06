const subsets = function(nums){
    // base case
    let result = [[]];

    function dfs(index, current){
        for(let i = index; i < nums.length; i++){
            current.push(nums[i]);
            result.push([...current]);

            dfs(i+1, current);
            // backtrack
            current.pop();
        }
    }
    dfs(0, [])
    return result;
};


console.log(subsets([1,2,3, 4]))