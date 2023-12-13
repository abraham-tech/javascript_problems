function isValidParentheses(s) {
    // Validate input
    if (typeof s !== 'string') {
        throw new TypeError('Input must be a string');
    }

    let stack = [];
    let map = {
        "]": "[",
        "}": "{",
        ")": "("
    };
    let openingBrackets = new Set(['[', '{', '(']); // Use Set for better performance

    for (let char of s) {
        if (openingBrackets.has(char)) { // If the character is an opening bracket
            stack.push(char);
        } else {
            if (map[char] !== stack.pop()) { // If the character is not a matching closing bracket
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log("Valid Parentheses:", isValidParentheses("()[]{}"));
console.log("Valid Parentheses:", isValidParentheses("()[{}"));
console.log("Valid Parentheses:", isValidParentheses("([()[]]){}"));
