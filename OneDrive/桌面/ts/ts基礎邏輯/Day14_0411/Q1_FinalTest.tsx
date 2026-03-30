import React, { useState, useEffect } from 'react';

/**
 * 📝 TS 基礎邏輯題 Day 14：綜合模擬測試
 * 
 * 【情境描述】
 * 這是最後的綜合測驗！我們要實作一個完整的「代辦事項 (Todo List)」。
 * 這裡沒有步驟提示，請綜合運用前 13 天學到的知識：
 * Interface, useState, Array Methods, React Events, Props
 */

// 1. 定義 Todo 物件的型別 (id: number, text: string, completed: boolean)
export interface Todo {
  // 你的實作...
}

// 2. 實作 TodoItem 元件 (接收一個 todo 與 toggle 函數)
interface TodoItemProps {
  // 你的實作...
}

export const TodoItem = ({ todo, onToggle }: any) => {
  return (
    <li 
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
};

// 3. 實作 TodoApp 元件
export const TodoApp = () => {
  // 實作 useState...
  
  // 實作 onChange...
  
  // 實作 onClick...
  
  // 實作 onToggle...

  return (
    <div>
      <h1>Todo List</h1>
      {/* 組合你的輸入框、按鈕與清單 */}
    </div>
  );
};
