// a. It first checks if the length of the array "nums" is less than or equal
// to 1. If it is, the function just returns the array because it's either empty
// or it only contains a single item (already sorted).
// b. It computes the middle index of the given array.
// c. It splits the array into two halves, "left" and "right".
// d. It recursively calls sortArray function to sort both half arrays.
// e. It uses the merge function to merge these two sorted half arrays together.
const sortArray = nums => {
    if(nums.length <= 1) return nums;

    const middle = Math.floor(nums.length/2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
    return merge(sortArray(left), sortArray(right));
}


// a. It declares an empty array "result" which will store the merged result.
// b. It enters a while loop that continues if both input arrays have elements.
// c. Inside the loop, it compares the first elements of both arrays. The smaller(or equal)
// element gets removed (shift) from its array("left" or "right") and gets pushed into
// the "result" array.
// d. After one of the arrays gets empty, the loop ends and the merge function returns
// the "result" array concatenated with any remaining elements from the "left" or "right" array.
const merge = (left, right) => {
    const result = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right];
}

console.log(sortArray([3,2,4,1,6,5]))
