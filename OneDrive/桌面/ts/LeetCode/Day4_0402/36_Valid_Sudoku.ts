// 36. Valid Sudoku (Medium)
// https://leetcode.com/problems/valid-sudoku/
// https://neetcode.io/problems/valid-sudoku

/**
 * 題目描述：
 * 判斷一個 9x9 的數獨版面是否合法。
 * 規則：
 * 1. 每一行 (row) 不能包含重複的數字。
 * 2. 每一列 (col) 不能包含重複的數字。
 * 3. 每個 3x3 的九宮格不能包含重複的數字。
 * (空白處以 '.' 表示)
 * 
 * Example 1:
 * Input: board = 
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,...]
 * Output: true
 */

// 解法 1：使用 HashSet 記錄數字是否出現過 (O(1) 時間 / O(1) 空間)
// 原理：遍歷每一個格子，並產生三個特定的字串存入 Set。
// "5 in row 0", "5 in col 0", "5 in block 0-0"
export function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const char = board[i][j];
      if (char !== '.') {
        const rowKey = `${char} in row ${i}`;
        const colKey = `${char} in col ${j}`;
        const blockKey = `${char} in block ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
        
        if (seen.has(rowKey) || seen.has(colKey) || seen.has(blockKey)) {
          return false;
        }
        
        seen.add(rowKey);
        seen.add(colKey);
        seen.add(blockKey);
      }
    }
  }
  
  return true;
}

/**
 * 💡 思考與檢討：
 * 1. 時間跟空間為什麼是 O(1)？(因為數獨大小固定是 9x9)
 * 2. blockKey 中的 Math.floor(i / 3) 和 Math.floor(j / 3) 是怎麼算出它在哪個九宮格的？
 */
