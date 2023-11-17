const permute = function (nums, arr=[], res=[]){
    // base case
    if(nums.length === 0) res.push([...arr]);

    for(let i = 0; i < nums.length; i++){
        let rest = nums.filter((n, index) => index !==i);
        arr.push(nums[i]);
        permute(rest, arr, res);
        arr.pop();
    }

    return res;
}


console.log("Solution for [1,2,3]: ", permute([1,2,3], [],[]))
