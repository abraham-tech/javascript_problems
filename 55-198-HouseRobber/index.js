const rob = function(nums){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < nums.length; i++){
        if(i % 2 === 0){
            even += nums[i];
        }else{
            odd +=nums[i];
        }
    }
    return Math.max(even, odd);
}


console.log(rob([2,7,9,3,1]))
console.log(rob([1,2,3,1]))
