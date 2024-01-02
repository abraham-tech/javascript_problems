function selectionSort(nums){
    for(let i = 0; i < nums.length; i++){
        let minIndex = i;
        for(let j = i; j < nums.length; j ++){
            if(nums[minIndex] > nums[j]){
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
}

console.log(selectionSort([2,4,3,6,5,1]));
