const combinationSum = function (candidates, target) {
    candidates.sort((a,b) => a - b);
    let dp = [[[]]];

    for(let sum = 0 ; sum <= target; sum++){
        dp[sum] = [];
        let combine = [];
        for(let i = 0; i < candidates.length && candidates[i] <= sum; i++){
            if(sum === candidates[i]){
                combine.push([candidates[i]]);
            } else {
                for(let prev of dp[sum - candidates[i]]){
                    if(candidates[i] >= prev[prev.length -1]){
                        combine.push([...prev, candidates[i]]);
                    }
                }
            }
        }
        dp[sum] = combine;
    }
    return dp[target];
};

console.log(combinationSum([2, 3, 6, 7], 7));
