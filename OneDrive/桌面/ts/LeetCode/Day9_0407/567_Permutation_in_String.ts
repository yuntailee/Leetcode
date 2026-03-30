// 567. Permutation in String (Medium)
// https://leetcode.com/problems/permutation-in-string/
// https://neetcode.io/problems/permutation-string

/**
 * 題目描述：
 * 給定兩個字串 s1 和 s2，如果 s2 包含 s1 的某個「排列(Permutation)」，回傳 true，否則回傳 false。
 * 也就是說，s1 的某個排列是 s2 的子字串。
 * 
 * Example 1:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * 解釋: s2 包含 "ba"，是 "ab" 的一個排列。
 */

// 解法 1：固定長度的滑動窗口 + Hash Map/Array (最佳解 O(n) 時間 / O(26)=O(1) 空間)
// 原理：排列的意思就是「字元種類與數量」完全相同（類似 Anagram）。
// 維護一個長度等於 s1.length 的窗口在 s2 上滑動，比較窗口內的字元頻率與 s1 的字元頻率是否一致。
export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  // 初始化 s1 的字元頻率，以及 s2 初始窗口的字元頻率
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;
  // 計算一開始有幾個字母的頻率是相同的
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++;
    }
  }

  // 開始滑動窗口
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;

    // 加入右邊的新字元
    let index = s2.charCodeAt(right) - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    // 移除左邊的舊字元
    index = s2.charCodeAt(left) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }
    left++;
  }

  return matches === 26;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼要用 `matches` 變數來記錄符合的數量，而不是每次都迴圈比對兩個陣列？(提示：O(26) 優化成 O(1))
 */
