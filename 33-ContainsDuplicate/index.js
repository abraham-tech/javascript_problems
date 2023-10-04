const containsDuplicate = (nums) => {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true;
        }
        hash[nums[i]] = true;
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3]));
