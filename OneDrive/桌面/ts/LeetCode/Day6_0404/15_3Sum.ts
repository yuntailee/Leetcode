// 15. 3Sum (Medium)
// https://leetcode.com/problems/3sum/
// https://neetcode.io/problems/three-integer-sum

/**
 * 題目描述：
 * 給定一個整數陣列 nums，請找出所有不重複的三元組 [nums[i], nums[j], nums[k]]，
 * 使得 i != j != k，且 nums[i] + nums[j] + nums[k] == 0。
 * 
 * 注意：答案中不能包含重複的三元組。
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 */

// 解法 1：排序 + 雙指針 (最佳解 O(n^2) 時間 / O(1) 或 O(n) 空間取決於排序)
// 原理：先將陣列排序。固定一個數字 nums[i]，然後在剩下的陣列中尋找和為 -nums[i] 的兩個數字(即 Two Sum II 的邏輯)。
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    // 避免重複的第一個數字
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        // 避免重複的第二個數字 (此時 left 已經加過了，所以比較 left 與 left - 1)
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return res;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼一定要先排序？不排序能做嗎？
 * 2. 避免重複的那兩行 `if (i > 0 && nums[i] === nums[i - 1])` 跟 `while (nums[left] === nums[left - 1])` 非常重要，想一想如果沒有這兩行會發生什麼事。
 */
