import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types';
import xhr from './xhr';
import { buildURL } from '../helpers/url';
import { flattenHeaders } from '../helpers/headers';
import transform from './transform';

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config).then(response => transformResponseData(response));
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.data = transform(config.data, config.headers, config.transformRequest);
  config.headers = flattenHeaders(config.headers, config.method!);
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url!, params);
}

function transformResponseData(response: AxiosResponse): AxiosResponse {
  response.data = transform(response.data, response.headers, response.config.transformResponse);
  return response;
}
