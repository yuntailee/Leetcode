// 11. Container With Most Water (Medium)
// https://leetcode.com/problems/container-with-most-water/
// https://neetcode.io/problems/max-water-container

/**
 * 題目描述：
 * 給定一個整數陣列 height，長度為 n。有 n 條垂直線，第 i 條線的高度是 height[i]。
 * 找出兩條線，使得它們與 x 軸共同構成的容器可以容納最多的水。
 * 
 * 回傳容器能容納的最大水量。
 * 
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */

// 解法 1：雙指針法 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：水的容量 = 寬度 (right - left) * 高度 (較短的那條線)。
// 左右各放一個指針向內縮。因為寬度一定會減少，要讓容量變大，只能期望「高度」變高，
// 所以每次都把「較短」的那條線往內移。
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼移動較高的那一邊，水容量「絕對不會」增加？(想通這個就能完全理解這題)
 */
