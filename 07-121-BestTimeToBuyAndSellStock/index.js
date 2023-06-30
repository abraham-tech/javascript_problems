var maxProfit = (prices) => {
  let curMin = prices[0];
  let curMax = 0;

  for (let i = 0; i < prices.length; i++) {
    curMin = Math.min(curMin, prices[i]);
    curMax = Math.max(curMax, prices[i] - curMin);
    console.log(curMax, curMin);
  }
  return curMax;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 5, 4, 3, 1]));
