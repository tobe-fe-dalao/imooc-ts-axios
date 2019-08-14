import axios from '../../src/index';

axios.interceptors.request.use(config => {
  config.headers.test += '1';
  return config;
});

axios.interceptors.request.use(config => {
  config.headers.test += '2';
  return config;
});

axios.interceptors.request.use(config => {
  config.headers.test += '3';
  return config;
});

axios.interceptors.response.use(response => {
  response.data += '1';
  return response;
});

let interceptor = axios.interceptors.response.use(response => {
  response.data += '2';
  return response;
});

axios.interceptors.response.use(response => {
  response.data += '3';
  return response;
});

axios.interceptors.response.eject(interceptor);

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then(response => {
  console.log(response.data);
});
