/**
 * 📝 TS 基礎邏輯題 Day 6：Type Aliases vs Interfaces
 * 
 * 【情境描述】
 * 在開發中，我們經常需要定義資料結構。雖然 Type 和 Interface 很多時候可以互換，
 * 但它們有一些關鍵差異。
 * 面試時常問：「什麼時候該用 Interface？什麼時候該用 Type？」
 * 
 * 1. 請使用 Interface 定義一個 `Animal`，包含 `name` (字串)。
 * 2. 請使用 Interface 定義一個 `Dog`，繼承自 `Animal`，並增加 `breed` (字串)。
 * 
 * 3. 請使用 Type Alias 定義一個 `Point` (包含 x, y 數字)。
 * 4. 請使用 Type Alias 定義一個 `Point3D`，繼承自 `Point`，並增加 `z` (數字)。
 */

// -------------------------------------------------------------
// 👇 第一步：定義 Interface (適合用在物件與擴充，例如宣告合併)
// -------------------------------------------------------------
export interface Animal {
  // 你的實作...
}

export interface Dog {
  // 你的實作...
}

// -------------------------------------------------------------
// 👇 第二步：定義 Type Alias (適合用在聯合型別、交叉型別)
// -------------------------------------------------------------
export type Point = {
  // 你的實作...
};

export type Point3D = any; // 請使用交叉型別 (&) 實作繼承...

// -------------------------------------------------------------
// 👇 第三步：觀察差異 (思考與實作)
// -------------------------------------------------------------

// 為什麼有時只能用 Type？
// 試著用 Type 宣告一個可以同時是 number 或 string 的型別 StringOrNumber：
export type StringOrNumber = any;

// 試著用 Type 宣告一個從特定字串選一個的 Union Type：
export type Status = 'active' | 'inactive' | 'pending';
