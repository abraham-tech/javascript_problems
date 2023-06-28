// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
  let len = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let before = 0;
  let now = 0;

  if (!len) return 0;

  for (var i = 0; i < len; i++) {
    now = Math.max(before + nums[i], nums[i]);
    max = Math.max(now, max);
    before = now;
  }

  return max;
};

console.log(maxSubArray(nums));
