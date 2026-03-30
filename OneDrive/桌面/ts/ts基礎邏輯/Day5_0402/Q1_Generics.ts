/**
 * 📝 TS 基礎邏輯題 Day 5：Generic 泛型基礎
 * 
 * 【情境描述】
 * 在 React 中，我們常常會寫 `useState<User>()` 這樣帶有 `<T>` 的語法。
 * 為了理解它，我們來手寫一個「可以裝任何東西的盒子 (Box)」以及
 * 一個通用的「API 回傳包裝格式 (ApiResponse)」。
 * 
 * 泛型 (Generics) 就像是型別的「變數」，讓你的型別可以重複使用在不同的資料結構上。
 */

// -------------------------------------------------------------
// 👇 第一步：定義泛型介面
// -------------------------------------------------------------

// 1. 請實作一個 Box 介面，它有一個 value 屬性，型別為 T
export interface Box<T> {
  // 請實作...
}

// 2. 實作一個通用的 API 回傳格式 ApiResponse<T>
// 包含：
// - status: 數字 (如 200, 404)
// - message: 字串
// - data: T 型別的資料
export interface ApiResponse<T> {
  // 請實作...
}

// -------------------------------------------------------------
// 👇 第二步：使用你的泛型
// -------------------------------------------------------------

// 假設我們有 User 跟 Product 兩種資料
interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  price: number;
}

// 1. 請宣告一個變數 userResponse，型別為「ApiResponse 裝著 User」
// 填入適合的假資料
export const userResponse: any = { // 請修改型別與資料
  status: 200,
  message: "Success",
  data: { id: 1, name: "Alice" }
};

// 2. 請宣告一個變數 productResponse，型別為「ApiResponse 裝著 Product 陣列 (Product[])」
// 填入適合的假資料
export const productResponse: any = { // 請修改型別與資料
  status: 200,
  message: "Success",
  data: [
    { id: 101, price: 500 },
    { id: 102, price: 1000 }
  ]
};

// -------------------------------------------------------------
// 👇 第三步：實作泛型 Function
// -------------------------------------------------------------

// 請實作一個 extractData 函式，接收 ApiResponse<T> 並回傳裡面的 data
// 注意：記得在 function 名稱後面加上 <T> 來宣告這是一個泛型函式
export function extractData(response: any): any { // 請修改型別
  // return response.data;
}

/*
// 測試：
const theUser = extractData(userResponse); 
// 將滑鼠移到 theUser 上，你應該會看到 TS 推斷它的型別是 User

const theProducts = extractData(productResponse); 
// 將滑鼠移到 theProducts 上，你應該會看到 TS 推斷它的型別是 Product[]
*/
