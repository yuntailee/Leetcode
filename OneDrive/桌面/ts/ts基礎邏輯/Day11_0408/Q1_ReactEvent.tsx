import React from 'react';

/**
 * 📝 TS 基礎邏輯題 Day 11：React Event 型別
 * 
 * 【情境描述】
 * 在處理 React 表單或點擊事件時，如果沒有給事件 (event) 正確的型別，
 * 會常常出現 `e.target.value` 報錯說「Property 'value' does not exist on type 'EventTarget'」。
 * 這是因為 TypeScript 不知道這個事件是從什麼元素發出的。
 */

// -------------------------------------------------------------
// 👇 實作區
// -------------------------------------------------------------

export const SearchBar = () => {
  const [keyword, setKeyword] = React.useState('');

  // 1. 請為 onClick 事件參數加上正確的型別
  // 提示：按鈕點擊事件通常是 React.MouseEvent<HTMLButtonElement>
  const handleSearchClick = (e: any) => {
    // 防止預設行為 (如果有被包在 form 裡的話)
    e.preventDefault();
    console.log('Searching for:', keyword);
  };

  // 2. 請為 onChange 事件參數加上正確的型別
  // 提示：輸入框變更事件通常是 React.ChangeEvent<HTMLInputElement>
  const handleInputChange = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={keyword} 
        onChange={handleInputChange} 
        placeholder="Search..."
      />
      <button onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};
