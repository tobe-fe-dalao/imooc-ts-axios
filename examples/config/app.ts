import axios from '../../src/index';
import qs from 'querystring';

axios.defaults.headers.common['test2'] = 123;

axios({
  method: 'post',
  url: '/config/post',
  data: qs.stringify({ a: 1 }),
  headers: {
    test: '321'
  }
}).then(response => {
  console.log(response.data);
});
