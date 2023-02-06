import { http } from '@/utils/http';
import indexedDB from '@/utils/indexedDB';

let airbnbDB = new indexedDB('airbnb');

/**
 *
 * 真实接口
 * @return {*}
 */
function fetchTest(): any {
  return http.httpRequestGet('https://api.apiopen.top/api/getHaoKanVideo', {});
}

/**
 *
 * Mock接口 使用Promise包装后并封装成真实接口的形式
 * @return {*}
 */
async function fetchRoom(): Promise<any> {
  await airbnbDB.openStore('room', 'id', ['长', '宽']);
  const res = await airbnbDB.getList('room').then((res) => {
    // 数据封装
    return { code: '200', message: '操作成功', result: res, succss: true };
  });
  return res;
}

export { fetchTest, fetchRoom };
