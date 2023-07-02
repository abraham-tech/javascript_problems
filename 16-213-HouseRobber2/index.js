const rob = function(nums){
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);

    let dp1 = new Array(nums.length);
    let dp2 = new Array(nums.length)

    robTwice(0, nums.length - 2, dp1, nums);
    robTwice(1, nums.length -1, dp2, nums);

    function robTwice(start, numsLength, dp, nums){
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);

        for(let i = start + 2; i <= numsLength; i++){
            dp[i] = Math.max(dp[i -1], dp[i - 2] + nums[i]);
        }
    }

    return Math.max(dp1[nums.length -2], dp2[nums.length - 1]);
}

console.log(rob([1,2,3,1]));