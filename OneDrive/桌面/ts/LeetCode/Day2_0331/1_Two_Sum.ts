// 1. Two Sum (Easy)
// https://leetcode.com/problems/two-sum/
// https://neetcode.io/problems/two-integer-sum

/**
 * 題目描述：
 * 給定一個整數陣列 nums 和一個目標值 target，請找出陣列中兩個數字，使得它們相加等於 target，
 * 並回傳這兩個數字的 index。
 * 
 * 假設每種輸入都只會有一組正確答案，且同樣的元素不能重複使用。
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

// 解法 1：使用 Hash Map (最佳解 O(n) 時間 / O(n) 空間)
// 原理：遍歷陣列時，把 target - 當前數字 的差值存起來。如果在 Map 中找到這個差值，代表找到答案了。
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}

/**
 * 💡 思考與檢討 (早上手寫時間)：
 * 1. 為什麼不能先排序陣列再用雙指針？(提示：題目要求回傳原本的 index)
 * 2. 如果題目要求的是回傳那兩個「數字」而不是 index，你會怎麼解？
 */
