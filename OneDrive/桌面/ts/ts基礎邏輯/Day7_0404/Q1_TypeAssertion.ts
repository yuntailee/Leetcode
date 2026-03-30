/**
 * 📝 TS 基礎邏輯題 Day 7：Type Assertion 與 Casting
 * 
 * 【情境描述】
 * 當我們從 `localStorage` 或某些未提供泛型的 API 讀取資料時，
 * TS 只會知道那是 `string | null` 或 `unknown`。
 * 或者是 `document.getElementById` 拿到的只會是 `HTMLElement | null`。
 * 這時我們需要使用 Type Assertion (型別斷言 `as`) 來告訴 TS 真正的型別。
 */

// 假設我們從 localStorage 拿到的使用者資料格式如下：
export interface LocalUser {
  id: number;
  username: string;
}

// -------------------------------------------------------------
// 👇 第一步：處理 JSON.parse 與 any
// -------------------------------------------------------------

export function getUserFromStorage(): LocalUser | null {
  const data = localStorage.getItem('user_profile');
  
  if (!data) return null;

  // 1. JSON.parse 預設回傳的是 any，請使用 `as` 將它斷言為 LocalUser 型別
  const parsedData = JSON.parse(data); 
  
  // 2. 回傳 parsedData
  return null; // 請修改這行
}

// -------------------------------------------------------------
// 👇 第二步：處理 DOM 元素
// -------------------------------------------------------------

export function setupInputEvent() {
  // `document.getElementById` 預設回傳 `HTMLElement | null`。
  // 但我們知道 "user-input" 是一個 <input> 標籤，我們需要取得它的 .value 屬性。
  // 請使用型別斷言 `as HTMLInputElement` 來告訴 TS 它是什麼元素。
  
  const inputEl = document.getElementById("user-input"); // 請修改這行加入斷言
  
  if (inputEl) {
    // 斷言成功後，這裡的 inputEl 應該會被 TS 認得為 HTMLInputElement，
    // 所以 inputEl.value 不會噴錯。
    // console.log(inputEl.value);
  }
}
