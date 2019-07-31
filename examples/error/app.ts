import axios, { AxiosError } from '../../src/index';

/**
 * 访问不存在的URL地址，返回404
 */
axios({
  method: 'get',
  url: '/error/get1'
}).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});

/**
 * 返回500错误
 */
axios({
  method: 'get',
  url: '/error/get'
}).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});

/**
 * 延迟5s，网络错误
 */
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get',
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
}, 5000);

/**
 * 请求超时
 */
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(response => {
  console.log(response);
}).catch((error: AxiosError) => {
  console.log(error.message);
  console.log(error.config);
  console.log(error.code);
  console.log(error.request);
  console.log(error.isAxiosError);
});
