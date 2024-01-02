function bubbleSort(nums){
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j+1] < nums[j]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }
    }
    return nums;
}

console.log(bubbleSort([3,2,4,1,6,5]));
