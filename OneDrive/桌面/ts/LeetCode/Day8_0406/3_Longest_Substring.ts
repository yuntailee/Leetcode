// 3. Longest Substring Without Repeating Characters (Medium)
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// https://neetcode.io/problems/longest-substring-without-duplicates

/**
 * 題目描述：
 * 給定一個字串 s，請找出其中「不含有重複字元」的最長子字串的長度。
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * 解釋: 答案是 "abc"，長度為 3。
 */

// 解法 1：滑動窗口 + Set (最佳解 O(n) 時間 / O(n) 空間)
// 原理：用 left 和 right 兩個指針維護一個「沒有重複字元」的窗口 (Window)。
// 如果 right 遇到的字元已經在 Set 裡面，就不斷移動 left 並把字元從 Set 移除，直到窗口內沒有重複字元為止。
export function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼 Set 刪除的是 s[left] 而不是 s[right]？(想像一下滑動窗口是怎麼移動的)
 */
