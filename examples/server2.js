const express = require('express');
const bodyParse = require('body-parser');
const cookieParse = require('cookie-parser');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieParse());

const router = express.Router();

const CORS = {
  'Access-Control-Allow-Origin': 'http://localhost:8071',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Method': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

router.post('/more/server2', function (req, res) {
  res.set(CORS);
  res.json(req.cookies);
});

router.options('/more/server2', function (req, res) {
  res.set(CORS);
  res.end();
});

app.use(router);

const port = 8088;

module.exports = app.listen(port);
