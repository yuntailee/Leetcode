// 42. Trapping Rain Water (Hard)
// https://leetcode.com/problems/trapping-rain-water/
// https://neetcode.io/problems/trapping-rain-water

/**
 * 題目描述：
 * 給定 n 個非負整數表示每個寬度為 1 的柱子的高度圖，計算按此排列的柱子下雨後能接多少水。
 * 
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 */

// 解法 1：雙指針法 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：某個位置能裝的水 = min(左邊最高, 右邊最高) - 自己的高度。
// 用雙指針從兩側往中間逼近，只要左邊的最高值小於右邊的最高值，
// 左邊指針那格能裝的水就由左邊最高值決定 (因為右邊一定有比它高的擋著)，反之亦然。
export function trap(height: number[]): number {
  if (!height || height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let res = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }

  return res;
}

/**
 * 💡 思考與檢討：
 * 1. 這題跟 Container With Most Water (11題) 雖然都是裝水，但計算公式完全不同，你能說明差異在哪嗎？
 */
