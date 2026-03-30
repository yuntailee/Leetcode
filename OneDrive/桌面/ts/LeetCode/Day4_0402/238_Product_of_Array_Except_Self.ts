// 238. Product of Array Except Self (Medium)
// https://leetcode.com/problems/product-of-array-except-self/
// https://neetcode.io/problems/products-of-array-discluding-self

/**
 * 題目描述：
 * 給定一個整數陣列 nums，回傳一個陣列 answer，
 * answer[i] 等於除了 nums[i] 以外其他所有元素的乘積。
 * 
 * 限制條件：時間複雜度必須為 O(n)，且「不能使用除法」。
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 */

// 解法 1：前綴積與後綴積分開計算 (O(n) 時間 / O(n) 空間)
// 原理：answer[i] = nums[i] 左邊所有元素的積 * nums[i] 右邊所有元素的積
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  
  const answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i];
  }
  
  return answer;
}

// 解法 2：空間優化 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：直接將結果存在 answer 陣列裡，先從左到右乘，再從右到左乘。
export function productExceptSelfOptimal(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);
  
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return answer;
}

/**
 * 💡 思考與檢討：
 * 1. 如果能使用除法，這題是不是非常簡單？(算出全部乘積後再除以 nums[i])
 * 2. 如果陣列中包含 0 呢？除法解法會有什麼問題？
 */
