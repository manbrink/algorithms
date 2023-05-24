function maxProfit(prices: number[]): number {
  let lowest = null;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (lowest == null || prices[i] < lowest) {
      lowest = prices[i];
    }

    if (prices[i] > lowest && prices[i] - lowest > maxProfit) {
      maxProfit = prices[i] - lowest;
    }
  }

  return maxProfit;
}

// buy on the lowest day, sell on highest after it

// two pointers?  one for lowest element, and another for current one.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

// Input: prices = [7,6,2,3,6,1]
// Output: 4
