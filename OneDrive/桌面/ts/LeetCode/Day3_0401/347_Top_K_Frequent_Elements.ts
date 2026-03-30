// 347. Top K Frequent Elements (Medium)
// https://leetcode.com/problems/top-k-frequent-elements/
// https://neetcode.io/problems/top-k-elements-in-list

/**
 * 題目描述：
 * 給定一個整數陣列 nums 和一個整數 k，回傳陣列中出現頻率前 k 高的元素。
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 */

// 解法 1：Bucket Sort (桶排序) (最佳解 O(n) 時間 / O(n) 空間)
// 原理：統計頻率後，建立一個長度為 n+1 的陣列 bucket，將相同頻率的數字放進 bucket[頻率] 中。
// 最後從後往前取 k 個元素。
export function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  
  const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of count.entries()) {
    bucket[freq].push(num);
  }
  
  const res: number[] = [];
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    if (bucket[i].length > 0) {
      res.push(...bucket[i]);
    }
  }
  
  return res;
}

// 解法 2：Hash Map 排序 (O(n log n) 時間)
export function topKFrequentSort(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  
  return Array.from(count.entries())
    .sort((a, b) => b[1] - a[1]) // 按頻率降序
    .slice(0, k)
    .map(entry => entry[0]);
}

/**
 * 💡 思考與檢討：
 * 1. Bucket Sort 中 bucket 的最大長度為什麼是 nums.length + 1？
 */
