import axios, { Canceler } from '../../src/index';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(e => {
  if (axios.isCancel(e)) {
    console.log('1. Request canceled, ' + e.message);
  }
});

setTimeout(() => {
  source.cancel('2. Operation canceled by the user.');

  setTimeout(() => {
    axios.post('/cancel/post', { a: 1 }, {
      cancelToken: source.token
    }).catch(e => {
      console.log(e.message);
    });
  }, 100);

}, 100);

let cancel: Canceler;

setTimeout(() => {
  axios.get('/cancel/get', {
    cancelToken: new CancelToken(c => {
      cancel = c;
    })
  }).catch(e => {
    if (axios.isCancel(e)) {
      console.log('3. Request canceled');
    }
  });
}, 150);

setTimeout(() => cancel(), 200);
