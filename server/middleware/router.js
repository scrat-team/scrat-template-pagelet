module.exports = function (options, app) {
  var emptyFn = function *(next) {
    yield next;
  };

  var mountRouter = function(instance){
    if(typeof instance === 'string'){
      instance = require(instance);
    }
    app.use(instance.routes());
  };

  return function mountRouters() {
    //sugar method app.get/post/...
    require('koa-router')(app);

    //mount routers
    mountRouter('../controller/blog/blog');

    return emptyFn;
  };
};
