// 424. Longest Repeating Character Replacement (Medium)
// https://leetcode.com/problems/longest-repeating-character-replacement/
// https://neetcode.io/problems/longest-repeating-substring-with-replacement

/**
 * 題目描述：
 * 給定一個只包含大寫英文字母的字串 s，和一個整數 k。
 * 你可以將任意字元替換成其他大寫字母，最多替換 k 次。
 * 找出替換後，能包含全部相同字母的最長子字串長度。
 * 
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * 解釋: 可以把兩個 'A' 替換成 'B'，或是兩個 'B' 替換成 'A'。
 */

// 解法 1：滑動窗口 (最佳解 O(n) 時間 / O(26)=O(1) 空間)
// 原理：窗口的大小 = right - left + 1。
// 如果「窗口大小 - 窗口內出現最多次的字母次數 > k」，代表這個窗口沒辦法用 k 次替換變成全相同的字母，
// 這時候就必須把 left 往右移縮小窗口。
export function characterReplacement(s: string, k: number): number {
  const count = new Map<string, number>();
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    count.set(char, (count.get(char) || 0) + 1);
    
    // 更新當前窗口內出現最多次字母的頻率
    maxFreq = Math.max(maxFreq, count.get(char)!);

    // 判斷當前窗口是否合法 (需要替換的字元數 > k)
    // 窗口長度 (right - left + 1) - 最多字母的數量 (maxFreq) = 需要替換的數量
    const windowLength = right - left + 1;
    if (windowLength - maxFreq > k) {
      const leftChar = s[left];
      count.set(leftChar, count.get(leftChar)! - 1);
      left++; // 縮小窗口
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼 left 往右移的時候，maxFreq 不需要重新計算（就算最高頻的字母可能變少了）？
 * (提示：因為我們只關心「歷史最大頻率」，如果沒有突破歷史最大頻率，最大長度 maxLength 就不可能增加)
 */
