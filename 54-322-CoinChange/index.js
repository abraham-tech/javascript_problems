const coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);

    // Base case
    dp[0] = 0;

    for( let curAmount = 1; curAmount <= amount; curAmount++){
        for(let coin of coins){
            if(curAmount - coin >= 0){
                dp[curAmount] = Math.min(dp[curAmount], 1 + dp[curAmount - coin])
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}


console.log(coinChange([1,2,5],11))
// console.log(coinChange([3],2))
