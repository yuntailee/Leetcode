/**
 * 📝 TS 基礎邏輯題 Day 13：TS 與 API 錯誤處理
 * 
 * 【情境描述】
 * 當使用 try-catch 攔截錯誤時，catch 區塊裡的 error 參數在 TS 中預設是 `unknown` 或 `any`。
 * 我們不能直接 `error.message`，必須先確定這是一個真正的 Error 物件（型別守衛 Type Guard）。
 */

// -------------------------------------------------------------
// 👇 第一步：定義客製化錯誤格式 (假設後端回傳的錯誤格式)
// -------------------------------------------------------------
export interface ApiErrorResponse {
  statusCode: number;
  errorMessage: string;
}

// -------------------------------------------------------------
// 👇 第二步：實作安全攔截錯誤的 API 請求
// -------------------------------------------------------------

export async function fetchUserData(userId: string) {
  try {
    // 模擬 API 請求
    const response = await fetch(`https://api.example.com/users/${userId}`);
    
    if (!response.ok) {
      // 故意拋出一個錯誤
      throw new Error(`API failed with status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error: unknown) {
    // 這裡不能直接寫 console.log(error.message)，會報錯

    // 1. 請實作型別守衛：檢查 error 是否為 Error 的實例 (instanceof)
    if (error instanceof Error) {
      console.error("Fetch Error:", error.message);
      return { success: false, message: error.message };
    }
    
    // 如果不是 Error 實例 (例如有人 throw "String")
    return { success: false, message: "An unknown error occurred" };
  }
}
