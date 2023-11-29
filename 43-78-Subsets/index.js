const subset = function(nums) {
    let result = [[]];

    function dfs(index, current){
        for(let i = index; i < nums.length; i++){
            current.push(nums[i]);
            result.push([nums[i]]);

            dfs(i + 1, current);

            current.pop();
        }
    }
    dfs(0, []);
    return result;
}

console.log(subset([1,2,3]))
