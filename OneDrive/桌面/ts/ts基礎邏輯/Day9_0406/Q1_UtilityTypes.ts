/**
 * 📝 TS 基礎邏輯題 Day 9：Utility Types (Partial, Pick, Omit)
 * 
 * 【情境描述】
 * 在處理表單時，我們通常會有一個完整的 User 介面。
 * 但在「更新使用者資料」的 API 中，所有欄位都是可選的 (選填)。
 * 在「登入」時，我們只需要部分欄位。
 * 這時 Utility Types 就能派上用場，讓你不需重複寫好幾個類似的 Interface！
 */

export interface FullUser {
  id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

// -------------------------------------------------------------
// 👇 實作區 (請使用 TypeScript 內建的 Utility Types)
// -------------------------------------------------------------

// 1. 使用 Partial：產生一個所有欄位都是選填的型別 (用在 Update API，因為你可能只想改名字)
export type UpdateUserPayload = any; // 請使用 Partial<FullUser>

// 2. 使用 Pick：只挑選 email 和 passwordHash (用在 Login API，登入只需要帳號密碼)
export type LoginPayload = any; // 請使用 Pick<FullUser, ...>

// 3. 使用 Omit：排除 id 和 passwordHash，保留其他對外公開的欄位 (用在 Profile 畫面顯示)
export type UserProfileDisplay = any; // 請使用 Omit<FullUser, ...>

// -------------------------------------------------------------
// 👇 測試區
// -------------------------------------------------------------

// 你可以試著打錯屬性名稱，看看 TS 會不會報錯：
const updateData: UpdateUserPayload = {
  firstName: "Alice" // 應該是合法的
};

const loginData: LoginPayload = {
  email: "test@test.com",
  passwordHash: "12345" // 應該是合法的，且不該包含 firstName
};
