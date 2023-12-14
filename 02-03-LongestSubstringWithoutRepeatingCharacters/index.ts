// given "abcabcbb" -> "abc"
// "bbbbb", the answer is "b"
// "pwwkew", the answer is "wke"
/**
 * This function calculates the length of the longest substring without repeating characters
 * @param {string} s - The input string
 * @returns {number} The length of the longest substring without repeating characters
 */
function lengthOfLongestSubstring(s: string): number {
  // Check if input is a string, if not throw an error
  if (typeof s !== 'string') {
    throw new Error('Invalid input: Please provide a string');
  }

  const map: Record<string, number> = {}; // Map to track the characters in the substring
  const len: number = s.length; // Length of the input string
  let max: number = 0; // Length of the longest substring
  let start: number = 0; // Starting index of the current substring

  // Iterate over the input string
  for (let i = 0; i < len; i++) {
    // If a character is repeated, update the start index to the position after the previous occurrence
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }

    // Update map with the current character and its index
    map[s[i]] = i;

    // Calculate length of current substring and update the max length if necessary
    max = Math.max(max, i - start + 1);
  }

  return max; // Return the length of the longest substring
}

console.log(lengthOfLongestSubstring("pwwkew"));
