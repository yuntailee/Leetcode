/**
 * 📝 TS 基礎邏輯題 Day 8：Async/Await 與 Promise 型別
 * 
 * 【情境描述】
 * 在 React 專案中，串接 API 是每天都在做的事。
 * 如果沒有為 Promise 定義回傳型別，拿到的 data 就會變成 any，
 * 這樣你的前端狀態就會失去 TypeScript 的保護！
 */

export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
}

// -------------------------------------------------------------
// 👇 實作區
// -------------------------------------------------------------

// 1. 請為這個 async function 加上正確的回傳型別
// 提示：async function 的回傳值一定是一個 Promise<T>，這裡的 T 應該是什麼？
export async function fetchWeather(city: string): Promise<any> { // 請修改型別
  console.log(`Fetching weather for ${city}...`);
  
  // 模擬 API 延遲
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city,
        temperature: 25,
        condition: "Sunny"
      });
    }, 1000);
  });
}

// -------------------------------------------------------------
// 👇 測試區
// -------------------------------------------------------------

async function updateUI() {
  const data = await fetchWeather("Taipei");
  
  // TS 應該要知道 data 有 .city, .temperature, .condition 屬性
  // 如果你把 Promise<any> 改成了正確的型別，下面這些屬性就會有自動補全 (Autocomplete)
  console.log(`Current temp in ${data.city} is ${data.temperature}°C`);
}
