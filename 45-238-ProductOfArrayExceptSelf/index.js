const productExceptSelf = function(nums){
    let forwardArray = [];
    let start = 1;

    for(let i = 0; i < nums.length; i++){
        forwardArray.push(start);
        start = start * nums[i];
    }

    let result = [];
    let start2 = 1;

    for(let j = nums.length - 1; j >= 0; j--){
        result.unshift(start2);
        start2 = nums[j] * start2;
    }

    return result;
}


console.log(productExceptSelf([1,2,3,4]));
