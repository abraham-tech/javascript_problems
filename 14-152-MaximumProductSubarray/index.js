const maxProduct = function(nums) {
    let maxProduct = nums[0];
    let currentProduct = nums[0];

    for( let i = 1; i < nums.length; i++){
        currentProduct = Math.max(nums[i - 1] * nums[i], nums[i]);
        maxProduct = Math.max(maxProduct, currentProduct);
    }
    return maxProduct;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1, -2, -6]));