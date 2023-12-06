const lengthOfLongestSubstring = function(s){
    let longestStr = 0;
    let set = new Set();
    let right = 0;
    let left = 0;

    while(right < s.length){
        let letter = s[right];
        if(!set.has(letter)){
            set.add(letter);
            longestStr = Math.max(longestStr, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return longestStr;
}

console.log(lengthOfLongestSubstring("abcabcbbdadfasdfas"))
