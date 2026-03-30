// 128. Longest Consecutive Sequence (Medium)
// https://leetcode.com/problems/longest-consecutive-sequence/
// https://neetcode.io/problems/longest-consecutive-sequence

/**
 * 題目描述：
 * 給定一個未排序的整數陣列 nums，請找出最長的「連續數字序列」的長度。
 * 必須要在 O(n) 的時間內解決。
 * 
 * Example 1:
 * Input: nums = [100, 4, 200, 1, 3, 2]
 * Output: 4
 * 解釋: 最長連續數字序列是 [1, 2, 3, 4]，所以回傳長度 4。
 */

// 解法 1：使用 Hash Set (最佳解 O(n) 時間 / O(n) 空間)
// 原理：將所有數字放入 Set。尋找序列的「起點」(也就是 num - 1 不在 Set 中的數字)，
// 然後不斷尋找 num + 1, num + 2，直到沒有下一個連續數字為止。
export function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;
  
  for (const num of numSet) {
    // 判斷當前數字是否為序列的第一個數字 (它的前一個數字不存在)
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      
      // 不斷尋找下一個連續的數字
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      
      longest = Math.max(longest, currentStreak);
    }
  }
  
  return longest;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼這個迴圈是 O(n) 而不是 O(n^2)？(提示：if (!numSet.has(num - 1)) 發揮了什麼作用？)
 * 2. 如果不把它轉成 Set 而是直接對陣列排序，時間複雜度會變多少？
 */
