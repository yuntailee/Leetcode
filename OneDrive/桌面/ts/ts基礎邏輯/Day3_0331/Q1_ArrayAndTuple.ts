/**
 * 📝 TS 基礎邏輯題 Day 3：Array 與 Tuple
 * 
 * 【情境描述】
 * 在開發一個購物車功能時，我們需要記錄使用者選購的商品與數量。
 * 同時，我們需要從一個坐標系統中讀取商店的經緯度 (Tuple)。
 * 
 * 1. 購物車項目包含 `productId` (數字) 與 `quantity` (數字)。
 * 2. 商店坐標是一個經緯度 Tuple，格式為 `[緯度, 經度]`。
 * 
 * 請實作相關的型別與一個計算購物車總數量的 function `getTotalQuantity`。
 */

// -------------------------------------------------------------
// 👇 第一步：定義 型別
// -------------------------------------------------------------

// 1. 定義 CartItem 介面
export interface CartItem {
  // 請實作屬性...
}

// 2. 定義 Cart 型別 (CartItem 的陣列，可以使用 CartItem[] 或 Array<CartItem>)
export type Cart = any; // 請修改這行

// 3. 定義 Coordinate 型別 (這是一個 Tuple: [數字, 數字])
export type Coordinate = any; // 請修改這行

// -------------------------------------------------------------
// 👇 第二步：實作你的 Function
// -------------------------------------------------------------

// 請實作 getTotalQuantity，計算購物車裡所有商品的數量總和。
export function getTotalQuantity(cart: Cart): number {
  // 你的實作...
  // 提示：可以使用 array.reduce 或 for 迴圈
  return 0;
}

// -------------------------------------------------------------
// 👇 第三步：測試資料
// -------------------------------------------------------------

/*
// 寫完後可以把這裡的註解解開來測試
const myCart: Cart = [
  { productId: 101, quantity: 2 },
  { productId: 102, quantity: 1 },
  { productId: 105, quantity: 4 }
];

const storeLocation: Coordinate = [25.0330, 121.5654]; // 台北 101 座標

console.log(getTotalQuantity(myCart)); // 應該印出 7
*/
