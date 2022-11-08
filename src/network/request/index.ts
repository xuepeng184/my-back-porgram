//统一出口
import axios from "axios";
import type { AxiosInstance } from "axios";
import { XpRequestConfig, XpRequestInterceptor } from "./type";

import { ElLoading } from "element-plus";
// import LoadingInstance from 'element-plus/lib/components/loading/src/loading.d.ts'
class XpRequest {
  instance: AxiosInstance;
  interceptor?: XpRequestInterceptor;
  showLoading: boolean;

  constructor(config: XpRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? true;
    this.interceptor = config.interceptor;
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorError
    );
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorError
    );

    this.instance.interceptors.request.use(
      (config) => {
        // if (this.showLoading) {
        //    ElLoading.service({
        //     lock: true,
        //     text: "正在请求数据...",
        //   });
        // }

        return config;
      },
      (error) => {
        console.log(error);
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        console.log("响应拦截成功");
        return error;
      }
    );
  }

  request<T = any>(config: XpRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance.request<any, T>(config).then((res) => {
        this.showLoading = true;
        resolve(res);
      });
    });
  }

  get<T = any>(config: XpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "get" });
  }

  post<T = any>(config: XpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "post" });
  }

  //所有实例都有的拦截器
}

export default XpRequest;
