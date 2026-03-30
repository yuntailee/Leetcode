// 242. Valid Anagram (Easy)
// https://leetcode.com/problems/valid-anagram/
// https://neetcode.io/problems/is-anagram

/**
 * 題目描述：
 * 給定兩個字串 s 和 t，如果 t 是 s 的 Anagram (字母異位詞)，則回傳 true，否則回傳 false。
 * 字母異位詞的意思是，兩個字串的「字母種類與數量」都完全一樣，只是順序不同。
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * 限制：s 與 t 只包含小寫英文字母。
 */

// 解法 1：使用 Hash Map 記錄字母頻率 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：因為只有 26 個小寫字母，空間是固定的 O(1)。
// 遍歷字串，s 的字母加 1，t 的字母減 1。最後檢查 Map 中是否所有字母頻率都是 0。
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
    countMap.set(t[i], (countMap.get(t[i]) || 0) - 1);
  }

  for (const count of countMap.values()) {
    if (count !== 0) return false;
  }

  return true;
}

// 解法 2：使用固定長度 26 的 Array (更有效率的 Hash Map 替代方案)
// 原理：字串僅含小寫字母，直接用 a-z 對應索引 0-25，速度比 Map 更快。
export function isAnagramArray(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // charCodeAt(0) - 97 可以將 'a' 對應到 0，'b' 對應到 1
    counts[s.charCodeAt(i) - 97]++;
    counts[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (counts[i] !== 0) return false;
  }

  return true;
}

// 解法 3：排序法 (O(n log n) 時間 / O(n) 空間)
// 原理：把字串拆成陣列，排序後再組裝回來，看兩個字串相不相等。程式碼最簡潔。
export function isAnagramSort(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}

/**
 * 💡 思考與檢討 (請用早上 08:00 - 10:00 的時間自己思考一下)：
 * 1. 解法 2 為什麼會比 解法 1 (使用 Map) 還快？(提示：記憶體分配與查找成本)
 * 2. 如果今天題目說輸入包含 Unicode 字元（例如中文或 Emoji），那解法 2 還適用嗎？這時候應該用哪種解法？
 */
