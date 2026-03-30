// 49. Group Anagrams (Medium)
// https://leetcode.com/problems/group-anagrams/
// https://neetcode.io/problems/anagram-groups

/**
 * 題目描述：
 * 給定一個字串陣列 strs，請將所有「字母異位詞」分組在一起。
 * 字母異位詞的意思是，組成單字的字母種類與數量完全相同，只是順序不同。
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

// 解法 1：按字元排序當作 Key (O(m * n log n) 時間)
// 原理：將字串排序後，如果是字母異位詞，排序後字串必定相同。以此為 key 分類。
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(s);
  }
  
  return Array.from(map.values());
}

// 解法 2：自訂字元頻率當作 Key (最佳解 O(m * n) 時間)
// 原理：計算 a-z 出現次數，轉成例如 "1#0#0#..." 的字串當作 key，省去排序的 n log n 時間。
export function groupAnagramsOptimal(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  
  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 97]++;
    }
    const key = count.join('#');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(s);
  }
  
  return Array.from(map.values());
}

/**
 * 💡 思考與檢討：
 * 1. 解法 2 的 key 為什麼要加上 '#' 符號？如果只用數字 join('') 會發生什麼事？
 */
