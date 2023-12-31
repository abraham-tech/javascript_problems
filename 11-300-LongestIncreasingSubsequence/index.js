const lengthOfLIS = function (nums) {
    let dp = nums.map(n => 1);

    for(let i = 1; i < nums.length; i++){
        for(j=0; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));