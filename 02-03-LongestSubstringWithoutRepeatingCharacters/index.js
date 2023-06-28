// given "abcabcbb" -> "abc"
// "bbbbb", the answer is "b"
// "pwwkew", the answer is "wke"
function lengthOfLongestSubstring(s) {
    var map = {};
    var len = s.length;
    var max = 0;
    var start = 0;
    for (var i = 0; i < len; i++) {
        if (map[s[i]] !== undefined) {
            start = Math.max(start, map[s[i]] + 1);
        }
        map[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
}
console.log(lengthOfLongestSubstring("pwwkew"));
