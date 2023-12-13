function makeAngleBracketsMatch(angles) {
    let openCount = 0;
    let result = "";

    // Add opening angle brackets
    for (let char of angles) {
        if (char === '>') {
            if (openCount === 0) {
                result += "<";
            } else {
                openCount--;
            }
        } else {
            openCount++;
        }
        result += char;
    }

    // Add closing angle brackets
    if (openCount < 0) {
        result += '<';
        openCount++;
    }

    for (let i = 0; i < openCount; i++) {
        result += ">";
    }

    return result;
}

const angles = ">>";
const output = makeAngleBracketsMatch(angles);
console.log(output);
