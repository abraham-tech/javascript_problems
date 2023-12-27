const subsetWithDup = function(nums) {
    let res = [[]];

    nums.sort((a,b) => a - b);

    function dfs(nums, res, currArr, start){
        for(let i = start; i < nums.length; i++){
            if(i === start || nums[i] !== nums[i-1]){
                currArr.push(nums[i]);
                res.push([...currArr]);
                dfs(nums, res, currArr, i + 1);
                currArr.pop();
            }
        }
    }
    dfs(nums, res, [], 0);
    return res;
}

console.log(subsetWithDup([1,2,2]))
