import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types';
import xhr from './xhr';
import { buildURL } from '../helpers/url';
import { transformRequest, transformResponse } from '../helpers/data';
import { flattenHeaders, processHeaders } from '../helpers/headers';

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config).then(response => transformResponseData(response));
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
  config.headers = flattenHeaders(config.headers, config.method!);
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url!, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config;
  return transformRequest(data);
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

function transformResponseData(response: AxiosResponse): AxiosResponse {
  const { data } = response;
  response.data = transformResponse(data);
  return response;
}
