export default class DB {
  private dbName: string; // 数据库名称
  private db: any; // 数据库对象

  constructor(dbName: string) {
    this.dbName = dbName;
  }
  /**
   *
   * 打开数据库
   * @param {string} storeName
   * @param {string} keyPath
   * @param {Array<string>} [index]
   * @memberof DB
   */
  public openStore(storeName: string, keyPath: string, index?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 1);

    return new Promise((reslove, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据库打开成功');
        if (event.target && event.target.result) {
          this.db = event.target.result;
        }

        console.log(event);
        reslove(true);
      };

      request.onerror = (event: any) => {
        console.log('数据库打开失败');
        console.log(event);
        reject(event);
      };

      request.onupgradeneeded = (event) => {
        console.log('数据库升级成功');
        const { result }: any = event.target;
        const store = result.createObjectStore(storeName, {
          autoIncrement: true,
          keyPath
        });
        index?.map((v: string) => {
          store.createIndex(v, v, { unique: false });
        });
        store.transaction.oncomplete = (event: any) => {
          console.log('创建对象仓库成功', event);
        };
        console.log(event);
        reslove(true);
      };
    });
  }

  /**
   *
   * 新增数据 | 修改数据 data中不传id就是新增
   * @param {string} storeName
   * @param {*} data
   * @memberof DB
   */
  public updateItem(storeName: string, data: any) {
    const store = this.db
      .transaction([storeName], 'readwrite')
      .objectStore(storeName);

    const request = store.put({
      ...data,
      updateTime: new Date().getTime()
    }); // 增加时间戳区分数据是否更新
    return new Promise((reslove, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据写入成功');
        console.log(event);
        reslove(event);
      };

      request.onerror = (event: any) => {
        console.log('数据写入失败');
        console.log(event);
        reject(event);
      };
    });
  }

  /**
   *
   * 删除数据
   * @param {string} storeName
   * @param {(number | string)} key
   * @memberof DB
   */
  public deleteItem(storeName: string, key: number | string) {
    const store = this.db
      .transaction([storeName], 'readwrite')
      .objectStore(storeName);

    const request = store.delete(key);

    return new Promise((reslove, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据删除成功');
        console.log(event);
        reslove(event);
      };

      request.onerror = (event: any) => {
        console.log('数据删除失败');
        console.log(event);
        reject(event);
      };
    });
  }

  /**
   *
   * 查询所有数据
   * @param {string} storeName
   * @memberof DB
   */
  public getList(storeName: string) {
    const store = this.db.transaction(storeName).objectStore(storeName);

    const request = store.getAll();

    return new Promise((reslove, reject) => {
      request.onsuccess = (event: any) => {
        console.log('查询所有数据成功');
        console.log(event.target.result);
        reslove(event.target.result);
      };

      request.onerror = (event: any) => {
        console.log('查询所有数据失败');
        console.log(event);
        reject(event);
      };
    });
  }

  /**
   *
   * 查询某一条数据
   * @param {string} storeName
   * @param {(number | string)} key
   * @memberof DB
   */
  public getItem(storeName: string, key: number | string) {
    const store = this.db.transaction(storeName).objectStore(storeName);

    const request = store.get(key);

    return new Promise((reslove, reject) => {
      request.onsuccess = (event: any) => {
        console.log('查询某一条数据成功');
        console.log(event.target.result);
        reslove(event.target.result);
      };

      request.onerror = (event: any) => {
        console.log('查询某一条数据失败');
        console.log(event);
        reject(event);
      };
    });
  }
}
