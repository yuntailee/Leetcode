// 271. Encode and Decode Strings (Medium)
// https://leetcode.com/problems/encode-and-decode-strings/
// https://neetcode.io/problems/string-encode-and-decode

/**
 * 題目描述：
 * 設計一個演算法，將字串陣列編碼成單一字串，並且可以解碼還原回原本的陣列。
 * 
 * Example 1:
 * Input: ["lint","code","love","you"]
 * Output: ["lint","code","love","you"]
 */

// 解法 1：長度 + 分隔符號 (最佳解 O(n) 時間 / O(n) 空間)
// 原理：編碼時，在每個字串前加上「長度」與特殊符號（例如 "#"）。解碼時根據長度擷取字串。
export class Solution {
  encode(strs: string[]): string {
    let res = "";
    for (const s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  decode(str: string): string[] {
    const res: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      const length = parseInt(str.substring(i, j), 10);
      res.push(str.substring(j + 1, j + 1 + length));
      i = j + 1 + length;
    }
    return res;
  }
}

/**
 * 💡 思考與檢討：
 * 1. 為什麼不能單純用某個符號（例如 "," 或 "#"）來當作字串的分隔符號？(提示：如果字串內容本身就包含這個符號怎麼辦？)
 */
