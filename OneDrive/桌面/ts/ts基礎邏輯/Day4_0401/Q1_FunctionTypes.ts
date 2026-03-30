/**
 * 📝 TS 基礎邏輯題 Day 4：Function Types
 * 
 * 【情境描述】
 * 我們需要開發一個通用的 API 請求發送器 `fetchData`。
 * 為了讓它更有彈性，這個函式可以接受 URL、HTTP Method (預設為 GET)，
 * 以及一個可選的回呼函式 (callback) 在請求完成時執行。
 * 
 * 請為這些函式加上完整的型別定義。
 */

// -------------------------------------------------------------
// 👇 第一步：定義函式型別
// -------------------------------------------------------------

// 1. 定義 HTTP Method 的字串聯合型別 (Union Type)
// 只允許 "GET", "POST", "PUT", "DELETE"
export type HttpMethod = any; // 請修改這行

// 2. 定義 callback 函式的型別：接收一個字串參數 (data)，沒有回傳值
export type SuccessCallback = any; // 請修改這行

// -------------------------------------------------------------
// 👇 第二步：實作帶有完整型別的 Function
// -------------------------------------------------------------

// 請幫 fetchData 的參數與回傳值加上正確的型別
// url: 字串
// method: 選填，型別為 HttpMethod (預設值為 "GET")
// onSuccess: 選填，型別為 SuccessCallback
export function fetchData(
  url: any, // 請修改型別
  method: any = "GET", // 請修改型別
  onSuccess?: any // 請修改型別
): void {
  console.log(`Sending ${method} request to ${url}...`);
  
  // 模擬 API 請求完成
  setTimeout(() => {
    const fakeResponse = `Response from ${url}`;
    if (onSuccess) {
      onSuccess(fakeResponse);
    }
  }, 1000);
}

// -------------------------------------------------------------
// 👇 第三步：測試資料
// -------------------------------------------------------------

/*
// 寫完後可以把這裡的註解解開來測試

// 測試 1：只傳 URL
fetchData("https://api.example.com/users");

// 測試 2：傳 URL 與 Method
fetchData("https://api.example.com/users", "POST");

// 測試 3：傳入所有參數
fetchData("https://api.example.com/users", "GET", (data) => {
  console.log("收到資料：", data);
});
*/
