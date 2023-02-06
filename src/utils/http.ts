import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const defaultConfig = {
  timeout: 5000,
  baseUrl: "",
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  private static axiosInstance = axios.create(defaultConfig);

  /**
   *
   * 请求拦截
   * @private
   * @memberof Http
   */
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
  /**
   *
   * 响应拦截
   * @private
   * @memberof Http
   */
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  // 封装请求

  /**
   *
   * Get
   * @template T
   * @param {string} url
   * @param {(AxiosRequestConfig<any> | undefined)} params
   * @return {*}  {Promise<T>}
   * @memberof Http
   */
  public async httpRequestGet<T>(
    url: string,
    params: AxiosRequestConfig<any> | undefined
  ): Promise<T> {
    const res = await Http.axiosInstance.get(url, params);
    return res.data;
  }

  /**
   *
   * Post
   * @template T
   * @param {string} url
   * @param {(AxiosRequestConfig<any> | undefined)} params
   * @return {*}  {Promise<T>}
   * @memberof Http
   */
  public async httpRequestPost<T>(
    url: string,
    params: AxiosRequestConfig<any> | undefined
  ): Promise<T> {
    const res = await Http.axiosInstance.post(url, params);
    return res.data;
  }
}

export const http = new Http();
