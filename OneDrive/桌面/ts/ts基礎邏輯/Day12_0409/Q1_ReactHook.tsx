import React, { useState, useRef } from 'react';

/**
 * 📝 TS 基礎邏輯題 Day 12：React Hook 型別 (useState, useRef)
 * 
 * 【情境描述】
 * 當我們使用 Hooks 時，TypeScript 大部分可以自動推斷型別。
 * 但當狀態一開始是 `null` 或空陣列 `[]` 時，TS 就猜不出來了，必須手動補上泛型。
 */

// -------------------------------------------------------------
// 👇 第一步：定義型別
// -------------------------------------------------------------
export interface Message {
  id: number;
  text: string;
}

// -------------------------------------------------------------
// 👇 第二步：實作區
// -------------------------------------------------------------
export const ChatRoom = () => {
  // 1. useState 型別：請告訴 TS 這個陣列裡只能裝 Message 物件
  // 提示：useState<Message[]>([])
  const [messages, setMessages] = useState<any>([]);

  // 2. useRef 型別：請告訴 TS 這個 ref 會綁定到一個 input 元素
  // 提示：useRef<HTMLInputElement>(null)
  const inputRef = useRef<any>(null);

  const handleSend = () => {
    // 因為 inputRef.current 可能是 null，所以需要加上可選串連 (?.)
    const text = inputRef.current?.value;
    
    if (text) {
      setMessages([...messages, { id: Date.now(), text }]);
      // 清空輸入框
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg: any) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
