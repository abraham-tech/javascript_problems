function findYValue(bits, maxSet, x) {
    // Find max possible value with maxSet bits set
    let y = (1 << maxSet) - 1;
    y = y << (bits - maxSet);  // Shift left to have y of bits length
    let yXORx = y ^ parseInt(x, 2);  // XOR y with x
    return yXORx.toString(2).padStart(bits, '0');  // Convert back to binary string
}

// Test the function
console.log(findYValue(3, 2, '001'));  // Output: 110
console.log(findYValue(3, 1, '101'));  // Output: 010
