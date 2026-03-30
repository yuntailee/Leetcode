// 167. Two Sum II - Input Array Is Sorted (Medium)
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// https://neetcode.io/problems/two-integer-sum-ii

/**
 * 題目描述：
 * 給定一個「已經遞增排序」的整數陣列 numbers 和一個目標值 target。
 * 請找出兩個數字，讓它們相加等於 target，並回傳它們的「1-indexed」索引。
 * 
 * 限制條件：不能使用額外的空間 (必須是 O(1) 空間)。
 * 
 * Example 1:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 */

// 解法 1：雙指針法 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：因為陣列已經排序，可以左右各放一個指針向內縮。
// 如果相加太大，代表右邊的數字太大，右指針左移；反之左指針右移。
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      // 題目要求 1-indexed，所以要 +1
      return [left + 1, right + 1];
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼這題不能像第一題 Two Sum 一樣用 Map？(提示：題目的空間複雜度限制)
 */
