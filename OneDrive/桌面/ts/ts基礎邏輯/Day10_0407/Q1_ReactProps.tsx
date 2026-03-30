/**
 * 📝 TS 基礎邏輯題 Day 10：React Props 型別定義
 * 
 * 【情境描述】
 * 在 React 專案中，組件 (Component) 通常會接收外部傳入的 Props。
 * 為了讓開發時有良好的提示，並且避免傳錯資料，我們需要精準定義 Props 的型別。
 * 
 * 請實作一個 `UserProfile` 元件的 Props 介面，並套用到元件上。
 */

// -------------------------------------------------------------
// 👇 第一步：定義 Props 介面
// -------------------------------------------------------------

export interface UserProfileProps {
  // 請定義以下屬性：
  // 1. name: 字串 (必填)
  // 2. age: 數字 (必填)
  // 3. email: 字串 (選填)
  // 4. isActive: 布林值 (預設為 false，所以是選填)
}

// -------------------------------------------------------------
// 👇 第二步：套用型別到 React Component
// -------------------------------------------------------------

// 請幫 UserProfile 元件加上 Props 型別定義
// 提示：可以使用 React.FC<UserProfileProps>，或是直接在參數解構處加上型別
export const UserProfile = ({ name, age, email, isActive = false }: any) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {email && <p>Email: {email}</p>}
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};
