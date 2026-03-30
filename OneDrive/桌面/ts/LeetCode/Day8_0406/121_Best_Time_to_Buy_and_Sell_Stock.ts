// 121. Best Time to Buy and Sell Stock (Easy)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://neetcode.io/problems/buy-and-sell-crypto

/**
 * 題目描述：
 * 給定一個陣列 prices，其中 prices[i] 是一支給定股票第 i 天的價格。
 * 你只能選擇「某一天」買入，並在「未來的某一天」賣出。
 * 找出能獲取的最大利潤。如果沒辦法獲利，回傳 0。
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * 解釋: 第 2 天 (價格 = 1) 買入，第 5 天 (價格 = 6) 賣出。利潤 = 6 - 1 = 5。
 */

// 解法 1：滑動窗口 / 雙指針 / 貪婪 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：只關注兩件事：1. 歷史最低點 (買入) 2. 當前賣出的利潤。
// 遍歷陣列時，如果遇到更低的價格就更新最低點；否則計算如果今天賣出會賺多少，並更新最大利潤。
export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
}

// 解法 2：雙指針 (Neetcode 風格)
export function maxProfitPointers(prices: number[]): number {
  let left = 0; // Buy
  let right = 1; // Sell
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // 如果今天的價格比之前買入的還低，那今天買入一定更好
      left = right;
    }
    right++;
  }

  return maxProfit;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼遇到 prices[left] >= prices[right] 時，可以直接把 left 移到 right 的位置？
 */
