// 125. Valid Palindrome (Easy)
// https://leetcode.com/problems/valid-palindrome/
// https://neetcode.io/problems/is-palindrome

/**
 * 題目描述：
 * 給定一個字串，驗證它是否為「迴文」(Palindrome)。
 * 在判斷時，請忽略所有「非英數字」的字元，並將大寫字母全部轉為小寫。
 * 迴文：正著讀和反著讀都一樣的字串。
 * 
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * 解釋: 轉換成 "amanaplanacanalpanama"，是迴文。
 */

// 解法 1：雙指針法 (最佳解 O(n) 時間 / O(1) 空間)
// 原理：左右兩端各放一個指針向中間移動，跳過非英數字元，遇到不相同的字母就回傳 false。
export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  
  // 輔助函數：判斷是否為英文字母或數字
  const isAlphanumeric = (char: string) => {
    return /^[a-zA-Z0-9]$/.test(char);
  };

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++;
    } else if (!isAlphanumeric(s[right])) {
      right--;
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }
  
  return true;
}

// 解法 2：取代字元後反轉 (較好理解 O(n) 時間 / O(n) 空間)
// 原理：用正則表達式把非英數字取代為空字串，轉小寫後，直接將字串反轉並比對。
export function isPalindromeSimple(s: string): boolean {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * 💡 思考與檢討：
 * 1. isAlphanumeric 判斷除了用 Regex 外，也可以用 charCode 來判斷範圍，你覺得哪種效能更好？
 * 2. 解法 2 使用了幾次陣列/字串的複製與轉換操作？這對記憶體有什麼影響？
 */
