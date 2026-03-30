// 217. Contains Duplicate (Easy)
// https://leetcode.com/problems/contains-duplicate/
// https://neetcode.io/problems/duplicate-integer

/*
 * 題目描述：
 * 給定一個整數陣列 nums，如果任一值在陣列中出現至少兩次，回傳 true。
 * 如果陣列中每個元素都是不同的，則回傳 false。
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 */

console.log("=== 測試開始 ===");

const test1=[1,2,3,1];
console.log("Test 1 [1,2,3,1]:",a(test1));

const test2=[1,2,3,4];
console.log("Test 2 [1,2,3,4]:", a(test2));

const test3 = [1,1,1,3,3,4,3,2,4,2];
console.log("Test 3 (很多重複):", a (test3));

// 解法 1：使用 Set (最佳解 O(n) 時間 / O(n) 空間)
// 原理：Set 是一種只允許唯一值的資料結構。如果 Set 的長度與原陣列長度不同，代表有重複元素。
// export function containsDuplicate(nums: number[]): boolean {
//   const numSet = new Set(nums);
//   return numSet.size !== nums.length;
// }

export function a(nums:number[]):boolean{
  const a= new Set (nums);
  return a.size !== nums.length;
}

// 解法 2：使用 HashSet 慢慢加入 (提早中斷)
// 原理：遍歷陣列並把數字存進 Set，如果發現數字已經在 Set 裡面，代表重複，提早回傳 true。
    // 提早結束，效能可能比上一個解法好
 export function containsDuplicateEarlyReturn(nums: number[]): boolean {
 const seen = new Set<number>();
 for (const num of nums) {
  if (seen.has(num)) {
   return true;
   seen.add(num);
 }
  return false;
}
}

// 解法 3：排序法 (O(n log n) 時間 / O(1) 或 O(n) 空間，取決於排序演算法)
// 原理：先把陣列排序，然後看相鄰的元素有沒有一樣。
 export function containsDuplicateSort(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
   for (let i = 1; i < nums.length; i++) {
     if (nums[i] === nums[i - 1]) {
       return true;
     }
   }
   return false;
 }

/**
 * 💡 思考與檢討 (請用早上 08:00 - 10:00 的時間自己思考一下)：
 * 1. 為什麼 Set 在尋找 (has) 元素的時候是 O(1) 的時間複雜度？底層是怎麼做的？
 * 2. 如果陣列長度非常小，解法 3 的效能會比解法 1 差嗎？
 */
