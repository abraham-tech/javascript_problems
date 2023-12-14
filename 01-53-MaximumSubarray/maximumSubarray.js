/**
 * This function calculates the maximum subarray sum using Kadane's algorithm
 * @param {Array<Number>} nums - The input array
 * @returns {Number} The maximum subarray sum
 */
function maxSubarraySum(nums) {
  // Check if input is an array and it is not empty
  // Throw an error if check fails
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error('Invalid input: Please provide a non-empty array');
  }

  let len = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let before = 0;
  let now = 0;

  for (var i = 0; i < len; i++) {
    now = Math.max(before + nums[i], nums[i]);
    max = Math.max(now, max);
    before = now;
  }

  return max;
}

console.log(maxSubArray(nums));
