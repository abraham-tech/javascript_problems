const maxSubArray = function (nums) {
    currMax = nums[0];
    max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        max = Math.max(currMax, max);
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
