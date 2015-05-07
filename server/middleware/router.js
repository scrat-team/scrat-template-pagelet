var mount = require('koa-mount');
var router = require('koa-router')();

module.exports = function (options, app, PROD) {

  //require('../controller/blog/blog')(router)
  return router;
};

router.all('/', function *(next) {
  this.body = 'abbb';
});


router.use(mount('/blog', function*(){
  this.body = 'blog'
  console.log('xx')
}))
//router.use('/blog', require('../controller/blog/blog').routes());