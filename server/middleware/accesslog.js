var accesslog = require('koa-accesslog');

module.exports = function (options, app, PROD) {
  return accesslog();
};