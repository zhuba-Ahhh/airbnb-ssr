import { http } from "@/utils/http";
import indexedDB from "@/utils/indexedDB";

let airbnbDB = new indexedDB("airbnb");

// 真实接口
function fetchTest() {
  return http.httpRequestGet("https://api.apiopen.top/api/getHaoKanVideo", {});
}

// Mock接口
async function fetchRoom() {
  await airbnbDB.openStore("room", "id", ["长", "宽"]);
  const res = await airbnbDB.getList("room");
  console.log(res);
}

export { fetchTest, fetchRoom };
