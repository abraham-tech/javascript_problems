function kadanesAlgorithm(maxSubArray){
    let currSum = maxSubArray[0];
    let maxSum = maxSubArray[0];

    for(let i = 0; i < maxSubArray.length; i++){
        currSum = Math.max(maxSubArray[i] + currSum, maxSubArray[i]);
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum;
}

console.log(kadanesAlgorithm([-2,1,-2,4,-1,2,1,-5,4]))