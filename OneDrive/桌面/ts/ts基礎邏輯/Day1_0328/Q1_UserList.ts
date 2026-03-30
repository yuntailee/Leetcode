/**
 * 📝 TS 基礎邏輯題 Day 1：過濾與格式化使用者列表 (User List)
 * 
 * 【情境描述】
 * 在 React 專案中，我們常常會從後端 API 拿到一包「原始資料」，
 * 但這包資料不能直接顯示在畫面上。畫面上的「使用者表格」有幾個規定：
 * 1. 只能顯示「已啟用 (isActive: true)」的使用者。
 * 2. 畫面上不需要顯示詳細資料，只需要顯示「全名 (fullName)」與「聯絡信箱 (email)」。
 * 3. 全名的格式必須是："firstName lastName" (中間有一個半形空格)。
 * 
 * 請實作一個 function `formatActiveUsers` 來完成這個需求。
 */

// -------------------------------------------------------------
// 👇 第一步：觀察並理解 Type (這是在 TypeScript 中最重要的一步！)
// -------------------------------------------------------------

// 這是後端 API 給我們的原始資料格式
export interface RawUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  age: number;
}

// 這是前端畫面 (Table 組件) 需要的資料格式
export interface TableUser {
  id: number;
  fullName: string;
  email: string;
}

// -------------------------------------------------------------
// 👇 第二步：實作你的 Function (請在紙上手寫這段邏輯)

export function formatActiveUsers(Users:RawUser[]):TableUser[]{
return Users
.filter((user)=>user.isActive)
.map((user)=>({
  id:user.id,
  fullName:`${user.firstName} ${user.lastName}`,
  email:user.email
}))
}
// -------------------------------------------------------------

/**
 * 💡 新手引導：該怎麼開始想？
 * 
 * 1. 輸入與輸出：
 *    - 我的 function 要接收什麼參數？ (提示：一個裝滿 RawUser 的陣列)
 *    - 我的 function 應該回傳什麼？ (提示：一個裝滿 TableUser 的陣列)
 *    - 記得幫參數和回傳值加上 TS 的型別 (Type Annotation)。
 * 
 * 2. 處理步驟 (陣列操作是 React 最常考的觀念)：
 *    - 步驟 A「過濾」：我有一百個人，但我只要 isActive 是 true 的人。
 *      (在 JS 中，把陣列「變少」，我們通常用哪一個陣列方法？)
 *    - 步驟 B「轉換」：剩下的這些人，資料格式還是 RawUser，但我需要把它「變形」成 TableUser。
 *      (在 JS 中，把陣列元素「一對一變形」，我們通常用哪一個陣列方法？)
 * 
 * 🔍 找答案的關鍵字建議 (如果你真的卡住了，可以去 Google)：
 * - "JavaScript array filter"
 * - "JavaScript array map"
 * - "TypeScript array types"
 */

// 請實作 formatActiveUsers 函式
// export function formatActiveUsers( ... ) { ... }


// -------------------------------------------------------------
// 👇 第三步：測試資料 (手寫時可以看著這些資料，想像資料怎麼流動)
// -------------------------------------------------------------

const mockApiData: RawUser[] = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", isActive: true, age: 28 },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", isActive: false, age: 34 },
  { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice@example.com", isActive: true, age: 22 }
];

/* 
期望的輸出結果 (Expected Output)：
[
  { id: 1, fullName: "John Doe", email: "john@example.com" },
  { id: 3, fullName: "Alice Johnson", email: "alice@example.com" }
]
*/

// export function formatActiveUsers( users:RawUser[]):TableUser[]{
//   return users
//   .filter((user)=>user.isActive)
//   .map((user)=>({
//     id:user.id,
//     fullName:`${user.firstName} ${user.lastName}`,
//     email:user.email

//   }));
// }

const result = formatActiveUsers(mockApiData);
console.log(result);