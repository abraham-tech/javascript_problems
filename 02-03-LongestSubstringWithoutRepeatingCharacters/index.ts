// given "abcabcbb" -> "abc"
// "bbbbb", the answer is "b"
// "pwwkew", the answer is "wke"

function lengthOfLongestSubstring(s: string): number {
  const map: Record<string, number> = {};
  const len: number = s.length;
  let max: number = 0;
  let start: number = 0;

  for (let i = 0; i < len; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstring("pwwkew"));
