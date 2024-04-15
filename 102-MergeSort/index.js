const mergeSortArray = nums => {
    if(nums.length <= 1) return nums;

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(mergeSortArray(left), mergeSortArray(right));
}

const merge = (left, right) => {
    let result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] > right[0]){
            result.push(right.shift());
        }else{
            result.push(left.shift());
        }
    }
    return [...result, ...left, ...right];
}

console.log(mergeSortArray([3,2,1,6,5,4]));