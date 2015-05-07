var accesslog = require('koa-accesslog');

module.exports = function (options) {
  return accesslog(options.stream);
};