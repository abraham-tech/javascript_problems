const isValidParentheses = function(s){
    let stack = [];
    let map = {
        "]":"[",
        "}":"{",
        ")":"("
    }

    for(let i = 0;  i< s.length; i++){
        let char = s[i];
        if(char === "{" || char === "[" || char === "("){
            stack.push (char);
        }else{
            if(char !== stack.pop()){
                return false;
            }
        }
    }

    return stack.length === 0;

}


console.log("Valid Parentheses:", isValidParentheses(["()[]{}"]));
console.log("Valid Parentheses:", isValidParentheses(["()[{}"]));
console.log("Valid Parentheses:", isValidParentheses(["([()[]]){}"]));
