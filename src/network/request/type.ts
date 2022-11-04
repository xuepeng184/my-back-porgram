import type {AxiosRequestConfig,AxiosResponse} from 'axios'


export interface XpRequestInterceptor<T = AxiosResponse>{
  requestInterceptor?:(res:AxiosRequestConfig)=>AxiosRequestConfig
  requestInterceptorError?:(error:any)=>any
  responseInterceptor?:(res:T)=>T
  responseInterceptorError?:(error:any)=>any
}

export interface XpRequestConfig<T= AxiosResponse> extends AxiosRequestConfig{
  interceptor?:XpRequestInterceptor<T>
  showLoading?:boolean
}

