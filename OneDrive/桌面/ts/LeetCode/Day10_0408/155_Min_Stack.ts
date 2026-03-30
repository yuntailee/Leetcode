// 155. Min Stack (Medium)
// https://leetcode.com/problems/min-stack/
// https://neetcode.io/problems/minimum-stack

/**
 * 題目描述：
 * 設計一個支援 push, pop, top 且能在 O(1) 時間內取得最小元素的堆疊 (Min Stack)。
 * 
 * MinStack(): 初始化堆疊物件。
 * void push(int val): 將元素推入堆疊。
 * void pop(): 移除堆疊頂端的元素。
 * int top(): 取得堆疊頂端的元素。
 * int getMin(): 取得堆疊中的最小元素。
 * 
 * Example:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 */

// 解法 1：使用兩個 Stack (最佳解 所有操作都是 O(1) 時間 / 總共 O(n) 空間)
// 原理：一個 stack 負責正常的推入與彈出，另一個 minStack 同步記錄對應位置的「歷史最小值」。
export class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    
    // minStack 永遠推進當前為止的最小值
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(val, currentMin));
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * 💡 思考與檢討：
 * 1. 如果改成只用「一個」Stack 來實作，裡面要存什麼樣的資料結構才能同時保存數值跟最小值？(提示：存 object 或 tuple)
 */
