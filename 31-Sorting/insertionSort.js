function insertionSort(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j >= 0; j--){
            if(nums[j] < nums[j-1]){
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            }
        }
    }
    return nums;
}

console.log(insertionSort([3,2,4,1,6,5]));
