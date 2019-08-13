const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/build/',
  stats: {
    colors: true,
    chunks: false,
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

registerSimpleRouter();
registerBaseRouter();
registerErrorRouter();
registerExtendRouter();

app.use(router);

const port = process.env.PORT || 8070;

module.exports = app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port + ', Ctrl + C to stop.');
});

function registerSimpleRouter() {
  router.get('/simple/get', function (req, res) {
    res.json({
      msg: 'Hello World!'
    });
  });
}

function registerBaseRouter() {
  router.get('/base/get', function (req, res) {
    res.json(req.query);
  });

  router.post('/base/post', function (req, res) {
    res.json(req.body);
  });

  router.post('/base/buffer', function (req, res) {
    let msg = [];
    req.on('data', (chunk) => {
      if (chunk) {
        msg.push(chunk);
      }
    });
    req.on('end', () => {
      let buf = Buffer.concat(msg);
      res.json(buf.toJSON());
    });
  });
}

function registerErrorRouter() {
  router.get('/error/get', function (req, res) {
    res.status(500);
    res.end();
  });

  router.get('/error/timeout', function (req, res) {
    setTimeout(() => {
      res.json({ msg: 'Hello World' });
    }, 3000);
  });
}

function registerExtendRouter() {
  router.get('/extend/get', function (req, res) {
    res.json({ msg: 'hello world' });
  });

  router.options('/extend/options', function (req, res) {
    res.end();
  });

  router.delete('/extend/delete', function (req, res) {
    res.end();
  });

  router.head('/extend/head', function (req, res) {
    res.end();
  });

  router.post('/extend/post', function (req, res) {
    res.json(req.body);
  });

  router.put('/extend/put', function (req, res) {
    res.json(req.body);
  });

  router.patch('/extend/patch', function (req, res) {
    res.json(req.body);
  });
}
