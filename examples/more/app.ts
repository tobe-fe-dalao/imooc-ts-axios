import axios, { AxiosError } from '../../src/index';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import qs from 'qs';

/**
 * CORS
 */
// document.cookie = 'a=b';
//
// axios.get('/more/get').then(res => {
//   console.log(res);
// });
//
// axios.post('http://localhost:8088/more/server2', {}, {
//   withCredentials: true,
// }).then(res => {
//   console.log(res);
// });

/**
 * XSRF防御
 */
// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// });
//
// instance.get('/more/get').then(res => {
//   console.log(res);
// });

/**
 * 监控上传和下载进度
 */
// const instance = axios.create();
//
// function calculatePercentage(loaded: number, total: number): number {
//   return Math.floor(loaded) / total;
// }
//
// function loadProgressBar() {
//   setupStartProgress();
//   setupUpdateProgress();
//   setupStopProgress();
//
//   function setupStartProgress() {
//     instance.interceptors.request.use(config => {
//       NProgress.start();
//       return config;
//     });
//   }
//
//   function setupUpdateProgress() {
//     const update = (e: ProgressEvent) => {
//       console.log(e);
//       NProgress.set(calculatePercentage(e.loaded, e.total));
//     };
//     instance.defaults.onDownloadProgress = update;
//     instance.defaults.onUploadProgress = update;
//   }
//
//   function setupStopProgress() {
//     instance.interceptors.response.use(response => {
//       NProgress.done();
//       return response;
//     }, error => {
//       NProgress.done();
//       return Promise.reject(error);
//     });
//   }
// }
//
// loadProgressBar();
//
// const downloadEl = document.getElementById('download');
//
// if (downloadEl) {
//   downloadEl.addEventListener('click', function () {
//     instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg');
//   });
// }
//
// const uploadEl = document.getElementById('upload');
//
// if (uploadEl) {
//   uploadEl.addEventListener('click', function () {
//     const data = new FormData();
//     const fileEl = document.getElementById('file') as HTMLInputElement;
//
//     if (fileEl.files) {
//       data.append('file', fileEl.files[0]);
//       instance.post('/more/upload', data);
//     }
//   });
// }

/**
 * HTTP 授权
 */
// axios.post('/more/post', {
//   a: 1,
// }, {
//   auth: {
//     username: 'Yee',
//     password: '123456'
//   }
// }).then(res => {
//   console.log(res);
// });

/**
 * 自定义状态码校验规则
 */
// axios.get('/more/304').then(res => {
//   console.log(res);
// }).catch((e: AxiosError) => {
//   console.log(e.message);
// });
//
// axios.get('/more/304', {
//   validateStatus(status) {
//     return status >= 200 && status < 400;
//   }
// }).then(res => {
//   console.log(res);
// }).catch((e: AxiosError) => {
//   console.log(e.message);
// });

/**
 * 自定义参数序列化
 */
// axios.get('/more/get', {
//   params: new URLSearchParams('a=b&c=d')
// }).then(res => {
//   console.log(res);
// });
//
// axios.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res);
// });
//
// const instance = axios.create({
//   paramsSerializer(params) {
//     return qs.stringify(params, { arrayFormat: 'brackets' });
//   }
// });
//
// instance.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res);
// });

/**
 * BaseURL
 */
// const instance = axios.create({
//   baseURL: 'http://img.mukewang.com/'
// });
//
// // 请求相对地址会自动加上BaseURL
// instance.get('5cc01a7b0001a33718720632.jpg');
//
// // 请求绝对地址BaseURL会自动失效
// instance.get('http://img.mukewang.com/5cc01a7b0001a33718720632.jpg');

/**
 * 扩展静态方法
 */
function getA() {
  return axios.get('/more/A');
}

function getB() {
  return axios.get('/more/B');
}

axios.all([getA(), getB()])
  .then(axios.spread(function (resA, resB) {
    console.log(resA);
    console.log(resB);
  }));

axios.all([getA(), getB()])
  .then(([resA, resB]) => {
    console.log(resA);
    console.log(resB);
  });

const fakeConfig = {
  baseURL: 'https://www.baidu.com/',
  url: '/user/12345',
  params: {
    idClient: 1,
    idTest: 2,
    testString: 'thisIsATest'
  }
};

console.log(axios.getUri(fakeConfig));
