export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';

export interface AxiosRequestConfig {
  url: string; // 请求URL地址
  method?: Method; // 请求方式
  data?: any; // 请求体
  params?: any; // 请求参数
  headers?: any; // 请求头
  responseType?: XMLHttpRequestResponseType; // 响应数据类型
  timeout?: number; // 请求超时时间
}

export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request: any;
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
}
