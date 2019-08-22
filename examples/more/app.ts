import axios from '../../src/index';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

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
axios.post('/more/post', {
  a: 1,
}, {
  auth: {
    username: 'Yee',
    password: '123456'
  }
}).then(res => {
  console.log(res);
});
