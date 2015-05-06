var serve = require('koa-static');

module.exports = function (options, app, PROD) {
  var root = options.root;
  delete options.root;
  return serve(root, {
    maxAge: PROD ? Infinity : 0
  });
};