import axios from "../../src/index";

/**
 * 参数为数组
 * => /base/get?foo[]=bar&foo[]=baz
 */
axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: ["bar", "baz"]
  }
});

/**
 * 参数为对象
 * => /base/get?foo=%7B%22bar%22:%22baz%22%7D
 */
axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: {
      bar: "baz"
    }
  }
});

/**
 * 参数为时间
 * => /base/get?date=2019-07-31T03:17:28.099Z
 */
axios({
  method: "get",
  url: "/base/get",
  params: {
    date: new Date()
  }
});

/**
 * 参数为特殊字符
 * => /base/get?foo=@:$+
 */
axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: "@:$ "
  }
});

/**
 * 参数中存在null
 * => /base/get?foo=bar
 */
axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: "bar",
    baz: null,
  }
});

/**
 * URL中带Hash
 * => /base/get?foo=bar
 */
axios({
  method: "get",
  url: "/base/get#hash",
  params: {
    foo: "bar"
  }
});

/**
 * URL中带参数
 * => /base/get?foo=bar&bar=baz
 */
axios({
  method: "get",
  url: "/base/get?foo=bar",
  params: {
    bar: "baz"
  }
});

axios({
  method: "post",
  url: "/base/post",
  data: {
    a: 1,
    b: 2
  }
});

axios({
  method: "post",
  url: "/base/buffer",
  data: new Int32Array([21, 31])
});