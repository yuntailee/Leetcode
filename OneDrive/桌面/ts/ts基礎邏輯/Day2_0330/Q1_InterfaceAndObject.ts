/**
 * 📝 TS 基礎邏輯題 Day 2：Interface 與 Object Types
 * 
 * 【情境描述】
 * 我們正在開發一個電商網站的商品詳細頁面。
 * 後端會回傳商品的資料，我們需要為這個商品資料定義一個 `Product` 型別。
 * 
 * 1. 商品有唯讀的 `id` (不能被修改)。
 * 2. 商品可能有 `discount` (折扣)，這是一個選填屬性。
 * 3. 商品包含 `seller` (賣家) 資訊，這是一個嵌套的物件。
 * 
 * 請實作 `Product` Interface 以及一個計算最終價格的 function `calculateFinalPrice`。
 */

// -------------------------------------------------------------
// 👇 第一步：定義 Interface
// -------------------------------------------------------------

export interface Seller {
  // 請定義：name (字串), rating (數字)
  name:string;
  rating:number;
}

export interface Product {
  // 請定義以下屬性：
  // - id: 唯讀的數字
  // - name: 字串
  // - price: 數字
  // - discount: 數字 (選填，代表折扣的百分比，例如 20 代表打 8 折)
  // - seller: Seller 物件
  readonly id:number;
  name:string;
  price:number;
  discount?:number;
  seller:Seller;
}

// -------------------------------------------------------------
// 👇 第二步：實作你的 Function
// -------------------------------------------------------------
// 請實作 calculateFinalPrice：如果有 discount，就打折；如果沒有，就原價。
// 提示：折扣計算公式為 price * (100 - discount) / 100

export function calculateFinalPrice(product: Product): string {
  // 你的實作...
  if(!product.discount){
    return `${product.name} ${product.price}`
    }else if(product.discount){
      return `${product.name} ${product.price *(100-product.discount)/100}`
      }
      return"";
}

// -------------------------------------------------------------
// 👇 第三步：測試資料
// -------------------------------------------------------------


// 寫完後可以把這裡的註解解開來測試
const product1: Product = {
  id: 1,
  name: "iPhone 15",
  price: 30000,
  seller: { name: "Apple Store", rating: 4.9 }
};

const product2: Product = {
  id: 2,
  name: "MacBook Pro",
  price: 60000,
  discount: 10, // 10% off
  seller: { name: "Apple Store", rating: 4.9 }
};

console.log(calculateFinalPrice(product1)); // 應該印出 30000
console.log(calculateFinalPrice(product2)); // 應該印出 54000
