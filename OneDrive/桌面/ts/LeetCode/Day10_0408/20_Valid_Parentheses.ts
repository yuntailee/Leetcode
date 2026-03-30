// 20. Valid Parentheses (Easy)
// https://leetcode.com/problems/valid-parentheses/
// https://neetcode.io/problems/validate-parentheses

/**
 * 題目描述：
 * 給定一個只包含 '(', ')', '{', '}', '[' 和 ']' 的字串 s，驗證括號是否合法。
 * 合法的條件：
 * 1. 左括號必須用相同類型的右括號閉合。
 * 2. 左括號必須以正確的順序閉合。
 * 
 * Example 1:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 2:
 * Input: s = "(]"
 * Output: false
 */

// 解法 1：使用 Stack (堆疊) (最佳解 O(n) 時間 / O(n) 空間)
// 原理：遇到左括號就推進 Stack；遇到右括號，就檢查 Stack 頂端是不是對應的左括號。
// 如果是對應的就 pop 出來，如果不是或 Stack 為空，代表不合法。最後檢查 Stack 是否為空。
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (char in map) {
      // 遇到右括號
      if (stack.length > 0 && stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // 遇到左括號
      stack.push(char);
    }
  }

  return stack.length === 0;
}

/**
 * 💡 思考與檢討：
 * 1. 如果 s 的長度是奇數，有沒有可能合法？這可以作為提早回傳 (Early Return) 的條件嗎？
 */
