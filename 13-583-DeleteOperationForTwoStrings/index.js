const minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;

    let dp = Array(m + 1 ).fill(0).map(() => Array(n + 1).fill(0));
    for(let i = 1; i <= word1.length; i++){
        for(let j = 1; j <= word2.length; j++){
            if(word1[i] == word2[j]){
                dp[i][j] = dp[i - 1][j-1] + 1;
            }else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    let commonChar = dp[m][n];
    return (m - commonChar) + (n - commonChar)
}

console.log(minDistance("leetcode", "etco"));
console.log(minDistance("sea", "eat"));